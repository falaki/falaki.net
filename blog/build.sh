#!/usr/bin/env python3
"""Regenerate blog/posts.json and blog/posts-data.js from *-en.md and *-fa.md files."""

import json
import re
from pathlib import Path

BLOG_DIR = Path(__file__).resolve().parent
POSTS_DIR = BLOG_DIR / "posts"
OUTPUT_JSON = BLOG_DIR / "posts.json"
OUTPUT_JS = BLOG_DIR / "posts-data.js"

FRONTMATTER_RE = re.compile(r"^---\s*\r?\n(.*?)\r?\n---\s*\r?\n([\s\S]*)", re.DOTALL)
LOCALE_FILE_RE = re.compile(r"^(.+)-(en|fa)$")
REFERENCE_DEF_RE = re.compile(r"^\[\^([^\]]+)\]:\s*(.*)$")
PERSIAN_CHAR_RE = re.compile(r"[\u0600-\u06FF]")


def parse_frontmatter_block(block: str) -> dict:
    meta = {}
    for line in block.splitlines():
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        value = value.strip()
        if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
            value = value[1:-1]
        meta[key.strip()] = value
    return meta


def split_post(text: str) -> tuple[dict, str]:
    match = FRONTMATTER_RE.match(text)
    if not match:
        return {}, text
    return parse_frontmatter_block(match.group(1)), match.group(2)


def transform_references(body: str) -> str:
    lines = body.splitlines()
    references: list[tuple[str, str]] = []
    kept_lines: list[str] = []
    i = 0

    while i < len(lines):
        line = lines[i]
        ref_match = REFERENCE_DEF_RE.match(line.strip())
        if not ref_match:
            kept_lines.append(line)
            i += 1
            continue

        ref_id = ref_match.group(1).strip()
        content_lines = [ref_match.group(2).strip()]
        i += 1

        # Markdown allows continuation lines in footnotes when indented.
        while i < len(lines):
            continuation = lines[i]
            if continuation.startswith("  ") or continuation.startswith("\t"):
                content_lines.append(continuation.lstrip())
                i += 1
                continue
            if continuation.strip() == "":
                content_lines.append("")
                i += 1
                continue
            break

        references.append((ref_id, "\n".join(content_lines).strip()))

    transformed_body = "\n".join(kept_lines).strip()
    if not references:
        return transformed_body

    for ref_id, _ in references:
        token = re.escape(ref_id)
        transformed_body = re.sub(
            rf"\[\^{token}\]",
            (
                f'<sup id="ref-{ref_id}" class="blog-reference-callout">'
                f'<a href="#footnote-{ref_id}">[{ref_id}]</a>'
                "</sup>"
            ),
            transformed_body,
        )

    refs_html_lines = [
        "",
        "",
        '<section class="blog-references">',
        "<hr>",
        "<ol>",
    ]
    for ref_id, content in references:
        is_farsi = bool(PERSIAN_CHAR_RE.search(content))
        footnote_dir = "rtl" if is_farsi else "ltr"
        footnote_lang = "fa" if is_farsi else "en"
        refs_html_lines.append(
            f'<li id="footnote-{ref_id}" dir="{footnote_dir}" lang="{footnote_lang}">{content} '
            f'<a href="#ref-{ref_id}" aria-label="Back to reference [{ref_id}]">↩</a></li>'
        )
    refs_html_lines.extend(["</ol>", "</section>"])

    return transformed_body + "\n" + "\n".join(refs_html_lines)


def first_paragraph(body: str) -> str:
    for chunk in re.split(r"\n{2,}", body):
        chunk = chunk.strip()
        if (
            not chunk
            or chunk.startswith(("#", "!", ">", "---", "```"))
            or REFERENCE_DEF_RE.match(chunk)
        ):
            continue
        # strip markdown: images, links, bold/italic, inline code, HTML tags
        chunk = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", chunk)
        chunk = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", chunk)
        chunk = re.sub(r"\[\^[^\]]+\]", "", chunk)
        chunk = re.sub(r"[*_]{1,3}([^*_]+)[*_]{1,3}", r"\1", chunk)
        chunk = re.sub(r"`[^`]+`", "", chunk)
        chunk = re.sub(r"<[^>]+>", "", chunk)
        chunk = " ".join(chunk.split())
        if chunk:
            return chunk
    return ""


def locale_entry(meta: dict, locale: str, body: str) -> dict:
    direction = meta.get("dir", "rtl" if locale == "fa" else "ltr").lower()
    transformed_body = transform_references(body)
    excerpt = meta.get("excerpt", "") or first_paragraph(transformed_body)
    return {
        "title": meta.get("title", ""),
        "excerpt": excerpt,
        "dir": "rtl" if direction == "rtl" else "ltr",
        "lang": meta.get("lang", "fa" if locale == "fa" else "en"),
        "body": transformed_body,
    }


def main() -> None:
    grouped: dict[str, dict] = {}

    for path in sorted(POSTS_DIR.glob("*.md")):
        match = LOCALE_FILE_RE.match(path.stem)
        if not match:
            print(f"Skipping {path.name} (expected slug-en.md or slug-fa.md)")
            continue

        text = path.read_text(encoding="utf-8")
        if not text.strip():
            print(f"Skipping {path.name} (file is empty)")
            continue

        meta, body = split_post(text)
        if not meta.get("title"):
            print(f"Skipping {path.name} (missing title in front matter)")
            continue

        slug, locale = match.group(1), match.group(2)

        if slug not in grouped:
            grouped[slug] = {"slug": slug, "date": "", "locales": {}}

        entry = grouped[slug]
        if meta.get("date"):
            entry["date"] = meta["date"]
        entry["locales"][locale] = locale_entry(meta, locale, body)

    posts = list(grouped.values())
    posts.sort(key=lambda item: item["date"], reverse=True)

    index_posts = []
    for post in posts:
        index_post = {
            "slug": post["slug"],
            "date": post["date"],
            "locales": {
                locale: {k: v for k, v in data.items() if k != "body"}
                for locale, data in post["locales"].items()
            },
        }
        index_posts.append(index_post)

    json_text = json.dumps(index_posts, ensure_ascii=False, indent=2) + "\n"
    OUTPUT_JSON.write_text(json_text, encoding="utf-8")

    js_text = (
        "// Generated by build.sh — do not edit.\n"
        "window.BLOG_POSTS = "
        + json.dumps(posts, ensure_ascii=False, indent=2)
        + ";\n"
    )
    OUTPUT_JS.write_text(js_text, encoding="utf-8")

    print(f"Wrote {len(posts)} post(s) to {OUTPUT_JSON} and {OUTPUT_JS}")


if __name__ == "__main__":
    main()
