# BEM Project template

A template project with a ready-to-use scripts that validates your project by BEM rules: run **'npm run test'** and review messages.

## How to use
1. Clone this repository into your environment
1. Install 'Node.js': https://nodejs.org/en/download/
1. Install dependencies: 'npm i'
1. Copy your sources into the repository folder:  
    
    <img src="https://user-images.githubusercontent.com/2094015/210180978-94c21de6-865d-426e-88d4-d6e8628f8c46.png" width="150">
1. Run the 'test' script and review the output: **'npm run test'**  
    
    <img src="https://user-images.githubusercontent.com/2094015/210168166-3bb8eb8b-9883-4dfc-a183-f9d015bdf768.png" width="800">

Don't forget to use https://validator.w3.org/#validate_by_input and https://yoksel.github.io/html-tree/ to validate you HTML structure.

And, use https://jigsaw.w3.org/css-validator/#validate_by_input to validate your CSS (the 'npm run postcss-import' script combines all CSS files into a single file).

## Used technologies
- [ESLint](https://eslint.org/)
- ['HTML ESLint' plugin for ESLint](https://github.com/yeonjuan/html-eslint)
- [Stylelint](https://stylelint.io/)
- [PostCSS](https://postcss.org/)
- [HTML Validate](https://html-validate.org/)
- [BEM](https://ru.bem.info/)
- [A set of custom Stylelint rules: stylelint-bem-newbie](https://www.npmjs.com/package/stylelint-bem-newbie)

## Notes

1. How to fix: ESLint couldn't determine the plugin uniquely: https://github.com/eslint/eslint/issues/13385 - use '--resolve-plugins-relative-to .' or 'root'
1. How to fix: WARN config global `--global`, `--local` are deprecated: https://stackoverflow.com/questions/72401421/message-npm-warn-config-global-global-local-are-deprecated-use-loc
1. Why html-validator is not used: it shows non-readable messages and doesn't have a config to disable some rules

## Todo

1. skip all exceptions in rules: show only 'validation error' results
1. BEM modifier: not allowed to duplicate style of its master BEM element
1. @media modifier: not allowed to explicitly duplicate its master styles
1. index.css: should be placed in the 'pages' folder
1. index.css @import paths: should be in accordance with BEM nesting rules, '../blocks/' only, no grouping, no root folder paths
1. @import url(some.css): allowed in the index.css only
1. img.alt: require RU texts somehow (at least one RU char?)
1. head>title: require RU texts somehow (at least one RU char?)
1. html.lang: allow 'ru' only
1. validate BEM html structure: something similar to https://yoksel.github.io/html-tree/
