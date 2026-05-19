(function () {
  "use strict";

  var LOCALES = ["en", "fa"];
  var LOCALE_LABELS = { en: "English", fa: "فارسی" };

  var FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;

  function parseFrontmatter(text) {
    var match = text.match(FRONTMATTER_RE);
    if (!match) {
      return { meta: {}, body: text };
    }
    var meta = {};
    match[1].split(/\r?\n/).forEach(function (line) {
      var colon = line.indexOf(":");
      if (colon === -1) {
        return;
      }
      var key = line.slice(0, colon).trim();
      var value = line.slice(colon + 1).trim();
      if (
        (value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') ||
        (value.charAt(0) === "'" && value.charAt(value.length - 1) === "'")
      ) {
        value = value.slice(1, -1);
      }
      meta[key] = value;
    });
    return { meta: meta, body: match[2] };
  }

  function applyDocumentDirection(dir, lang) {
    var html = document.documentElement;
    html.setAttribute("dir", dir === "rtl" ? "rtl" : "ltr");
    if (lang) {
      html.setAttribute("lang", lang);
    }
  }

  function validSlug(slug) {
    return /^[a-z0-9][a-z0-9-]*$/.test(slug);
  }

  function validLocale(locale) {
    return LOCALES.indexOf(locale) !== -1;
  }

  function postFilePath(slug, locale) {
    return "posts/" + slug + "-" + locale + ".md";
  }

  function postUrl(slug, locale) {
    return (
      "post.html?slug=" +
      encodeURIComponent(slug) +
      "&lang=" +
      encodeURIComponent(locale)
    );
  }

  function defaultLocale(locales) {
    if (!locales) {
      return "en";
    }
    if (locales.en) {
      return "en";
    }
    if (locales.fa) {
      return "fa";
    }
    return "en";
  }

  function localeDirection(meta, locale) {
    var dir = (meta.dir || "").toLowerCase();
    if (dir === "rtl" || dir === "ltr") {
      return dir;
    }
    return locale === "fa" ? "rtl" : "ltr";
  }

  function localeLang(meta, locale) {
    if (meta.lang) {
      return meta.lang;
    }
    return locale === "fa" ? "fa" : "en";
  }

  function formatDate(isoDate) {
    if (!isoDate) {
      return "";
    }
    var parts = isoDate.split("-");
    if (parts.length !== 3) {
      return isoDate;
    }
    var date = new Date(
      Number(parts[0]),
      Number(parts[1]) - 1,
      Number(parts[2])
    );
    if (isNaN(date.getTime())) {
      return isoDate;
    }
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function renderMarkdown(body) {
    if (typeof marked !== "undefined") {
      return marked.parse(body);
    }
    return "<pre>" + body.replace(/</g, "&lt;") + "</pre>";
  }

  function resolveBlogUrl(relativePath) {
    var base = window.location.href;
    var path = window.location.pathname;
    if (/\.[a-z0-9]+$/i.test(path.split("/").pop() || "")) {
      base = base.slice(0, base.lastIndexOf("/") + 1);
    } else if (!path.endsWith("/")) {
      base = base + "/";
    }
    return new URL(relativePath, base).href;
  }

  function fetchText(url) {
    var resolved = url.indexOf("://") === -1 ? resolveBlogUrl(url) : url;
    return fetch(resolved).then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to load " + resolved);
      }
      return response.text();
    });
  }

  function fetchPosts() {
    if (window.BLOG_POSTS) {
      return Promise.resolve(window.BLOG_POSTS);
    }
    return fetchText("posts.json").then(function (text) {
      return JSON.parse(text);
    });
  }

  function findPost(posts, slug) {
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].slug === slug) {
        return posts[i];
      }
    }
    return null;
  }

  function loadPostLocale(slug, locale) {
    var posts = window.BLOG_POSTS;
    if (!posts) {
      return fetchPosts().then(function (loaded) {
        var post = findPost(loaded, slug);
        if (!post || !post.locales[locale]) {
          throw new Error("Post locale not found");
        }
        return fetchPostLocaleFromFile(slug, locale, post);
      });
    }

    var post = findPost(posts, slug);
    if (!post || !post.locales[locale]) {
      return Promise.reject(new Error("Post locale not found"));
    }

    var localeData = post.locales[locale];
    if (localeData.body) {
      return Promise.resolve({
        post: post,
        locale: locale,
        localeData: localeData,
      });
    }

    return fetchPostLocaleFromFile(slug, locale, post);
  }

  function fetchPostLocaleFromFile(slug, locale, post) {
    return fetchText(postFilePath(slug, locale)).then(function (text) {
      var parsed = parseFrontmatter(text);
      var meta = parsed.meta;
      return {
        post: post,
        locale: locale,
        localeData: {
          title: meta.title || post.locales[locale].title || slug,
          excerpt: meta.excerpt || post.locales[locale].excerpt || "",
          dir: localeDirection(meta, locale),
          lang: localeLang(meta, locale),
          body: parsed.body,
        },
      };
    });
  }

  function renderLangSwitcher(container, slug, locales, activeLocale) {
    container.innerHTML = "";
    container.hidden = false;

    var available = LOCALES.filter(function (locale) {
      return locales && locales[locale];
    });

    if (available.length <= 1) {
      container.hidden = true;
      return;
    }

    available.forEach(function (locale, index) {
      if (index > 0) {
        var sep = document.createElement("span");
        sep.className = "blog-lang-sep";
        sep.textContent = " | ";
        sep.setAttribute("aria-hidden", "true");
        container.appendChild(sep);
      }

      if (locale === activeLocale) {
        var current = document.createElement("span");
        current.className = "blog-lang-current";
        current.textContent = LOCALE_LABELS[locale];
        current.setAttribute("lang", locale === "fa" ? "fa" : "en");
        container.appendChild(current);
      } else {
        var link = document.createElement("a");
        link.href = postUrl(slug, locale);
        link.textContent = LOCALE_LABELS[locale];
        link.setAttribute("lang", locale === "fa" ? "fa" : "en");
        container.appendChild(link);
      }
    });
  }

  window.Blog = {
    LOCALES: LOCALES,
    LOCALE_LABELS: LOCALE_LABELS,
    parseFrontmatter: parseFrontmatter,
    applyDocumentDirection: applyDocumentDirection,
    validSlug: validSlug,
    validLocale: validLocale,
    postFilePath: postFilePath,
    postUrl: postUrl,
    defaultLocale: defaultLocale,
    localeDirection: localeDirection,
    localeLang: localeLang,
    formatDate: formatDate,
    renderMarkdown: renderMarkdown,
    fetchText: fetchText,
    fetchPosts: fetchPosts,
    findPost: findPost,
    loadPostLocale: loadPostLocale,
    renderLangSwitcher: renderLangSwitcher,
  };
})();
