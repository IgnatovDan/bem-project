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
    // https://html.spec.whatwg.org/multipage/syntax.html#the-doctype
    // A string that is an ASCII case-insensitive match for the string "<!DOCTYPE".
    "doctype-style": 0,
    "no-redundant-for": 1, // it can be better, but not critical when start learning markup
    "attr-quotes": [
      "error",
      {
        "style": "any",
        "unquoted": false
      }
    ],
    "heading-level": [
      2,
      {
        // this scenario is already checked by eslint, disable to avoid error message duplication
        // https://html-validate.org/rules/heading-level.html
        "allowMultipleH1": true
      }
    ],
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
      },
      "iframe": {
        "attributes": {
          "title": {
            "required": false, // it can be better, but not critical when learning markup
          }
        }
      },
    }
  ]
}
