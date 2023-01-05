module.exports = {
  "extends": [
    "html-validate:recommended"
  ],
  "rules": {
    "wcag/h30": 0,
    "no-style-tag": 2,
    "no-unknown-elements": 2,
    "prefer-button": 1,
    "text-content": 0,
    "attr-delimiter": 0,
    "void-style": 0,
    "no-trailing-whitespace": 0,
    "attr-quotes": 1,
    "heading-level": 2,
    "class-pattern": [
      2,
      {
        "pattern": "^[a-z]+[a-z\\-]*(__[a-z]+[a-z\\-]*)?(_[a-z]+[a-z\\-]*){0,2}$"
      }
    ]
  },
  "elements": [
    "html5",
    {
      "br": {
        "deprecated": true
      },
      "i": {
        "deprecated": true
      },
      "b": {
        "deprecated": true
      },
      "button": {
        "attributes": {
          "type": {
            //this scenario is already checked by eslint, disable to avoid error message duplication
            "required": false
          }
        }
      },
      "img": {
        "attributes": {
          "alt": {
            "required": true,
            "enum": ["/.+/"]
          }
        }
      },
      "form": {
        "attributes": {
          "name": {
            "required": true,
            "enum": ["/.+/"]
          }
        }
      }
    }
  ]
}
