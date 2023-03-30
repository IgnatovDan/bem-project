module.exports = {
  "ignoreFiles": [
    "**/normalize.css"
  ],
  "plugins": [
    "stylelint-csstree-validator",
    "stylelint-bem-newbie"
  ],
  "rules": {
    "bem-newbie/absolute-has-two-dimensions": [true, { severity: 'warning' }],
    "bem-newbie/animation-explicit-timing-function": true,
    "bem-newbie/class-name-equal-to-file-name": true,
    "bem-newbie/display-deny-inline": true,
    "bem-newbie/duplicated-property-value-in-media": true,
    "bem-newbie/duplicated-property-value-in-modifier": true,
    "bem-newbie/font-face-declaration-in-fonts-file-only": true,
    "bem-newbie/font-face-duplicate-src": true,
    "bem-newbie/font-weight-file-name": true,
    "bem-newbie/import-bem-path": true,
    "bem-newbie/import-fonts": true,
    "bem-newbie/import-normalize": true,

    "csstree/validator": true,
    "no-duplicate-selectors": true,
    "selector-no-qualifying-type": true,
    "selector-max-id": 0,
    "selector-max-attribute": 0,
    "declaration-no-important": true,
    "selector-max-universal": 0,
    "selector-max-type": 0,
    "max-nesting-depth": 0,
    "selector-max-combinators": 0,
    "at-rule-no-unknown": true,
    "function-no-unknown": [
      true,
      {
        // https://developer.mozilla.org/en-US/docs/Web/CSS/filter
        // disable error message for '.item { filter: alpha(opacity=50); }'
        "ignoreFunctions": ["alpha"]
      }
    ],
    "media-feature-name-no-unknown": true,
    "property-no-unknown": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "unit-no-unknown": true,
    "no-unknown-animations": true,
    "named-grid-areas-no-invalid": true,
    "no-invalid-double-slash-comments": true,
    "color-no-invalid-hex": true,
    "no-invalid-position-at-import-rule": true,
    "string-no-newline": true,
    "font-family-no-missing-generic-family-keyword": true,
    "keyframe-declaration-no-important": true,
    "declaration-block-no-duplicate-properties": true,
    "font-family-no-duplicate-names": true,
    "keyframe-block-no-duplicate-selectors": true,
    "no-duplicate-at-import-rules": true,
    // "declaration-block-no-shorthand-property-overrides": true, -- not a showstopper
    "annotation-no-unknown": true,
    "declaration-property-value-disallowed-list": {
      "word-wrap": "break-word",
      "white-space": "pre-line"
    },
    // More class patterns:
    // https://gist.github.com/Potherca/f2a65491e63338659c3a0d2b07eee382
    // https://github.com/simonsmith/stylelint-selector-bem-pattern/issues/23#issuecomment-279216443
    // https://github.com/bem-sdk-archive/bem-naming/blob/master/lib/create-parse.js
    "selector-class-pattern": "^[a-z]+[a-z\\-]*(__[a-z]+[a-z\\-]*)?(_[a-z]+[a-z\\-]*){0,2}$",
    //"no-descending-specificity": true, // don't use, it is not critical when learning markup and shows 'can skip' messages
  }
}
