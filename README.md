# BEM Project template

A template project with a ready-to-use scripts that validates your project by BEM rules: run **'npm run test'** and review messages.

## How to use
1. Clone this repository into your environment
1. Install 'Node.js': https://nodejs.org/en/download/
1. Install dependencies: 'npm i'
1. Copy your sources into the repository folder
1. Run the 'test' script: **'npm run test'**
1. Review the output

Don't forget to use https://validator.w3.org/#validate_by_input and https://yoksel.github.io/html-tree/ to validate you HTML structure.

And, use https://jigsaw.w3.org/css-validator/#validate_by_input to validate your CSS (the 'npm run postcss-import' script combines all CSS files into a single file).

## Used technologies:
- ESLint
- StyleLint
- PostCSS
- HTML Validate
- HTML Validator
- BEM

## Todo:

1. remove test-rules script: move rules to a separate package and use it in devDependencies
1. skip all exceptions in rules: show only 'validation error' results
1. @font-face2: not used in blocks/** files
1. BEM modifier: not allowed to duplicate style of its master BEM element
1. @media modifier: not allowed to explicitly duplicate its master styles
1. index.css: should be placed in the 'pages' folder
1. index.css @import paths: should be in accordance with BEM nesting rules, '../blocks/' only, no grouping, no root folder paths
1. @import url(some.css): allowed in the index.css only
1. img.alt: require RU texts somehow (at least one RU char?)
1. head>title: require RU texts somehow (at least one RU char?)
1. html.lang: allow 'ru' only
1. validate BEM html structure: something similar to https://yoksel.github.io/html-tree/
1. extract configs from package.json into separate files: eslint, stylelint, jest
