#!/bin/sh

cat header > index.html
markdown_py -x toc -x markdown.extensions.toc  IBCC.md  >> index.html
cat footer >> index.html
echo "Generated index.html"
