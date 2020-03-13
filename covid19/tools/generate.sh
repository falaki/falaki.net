#!/bin/sh

cat tools/header > index.html
markdown_py -x toc -x markdown.extensions.toc  IBCC.md  >> index.html
cat tools/footer >> index.html
echo "Generated index.html"
