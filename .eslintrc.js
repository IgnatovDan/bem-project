module.exports = {
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "env": {
    "es6": true
  },
  "plugins": [
    "@html-eslint"
  ],
  "rules": {
    "@html-eslint/no-inline-styles": 2,
    "@html-eslint/no-multiple-h1": 2,
    "@html-eslint/require-lang": 2,
    "@html-eslint/require-title": 2,
    "@html-eslint/require-img-alt": 2,
    "@html-eslint/no-skip-heading-levels": 2,
    "@html-eslint/require-meta-viewport": 2,
    "@html-eslint/no-obsolete-tags": 2,
    "@html-eslint/require-button-type": 2,
    "@html-eslint/no-restricted-attrs": [
      "error",
      {
        "tagPatterns": [
          "iframe"
        ],
        "attrPatterns": [
          "width",
          "height"
        ]
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.html"
      ],
      "parser": "@html-eslint/parser"
    }
  ]
}
