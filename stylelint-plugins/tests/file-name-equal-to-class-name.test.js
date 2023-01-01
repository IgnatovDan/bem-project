const getTestRule = require('jest-preset-stylelint/getTestRule');

global.testRule = getTestRule({ plugins: ['./stylelint-plugins/file-name-equal-to-class-name.js'] });

const { ruleName } = require('../file-name-equal-to-class-name.js');

testRule({
  ruleName,
  config: true,
  skipBasicChecks: true,
  codeFilename: 'page.css',
  accept: [
    { code: '.page {}' },
  ],
});
