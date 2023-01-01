const path = require('path');
const stylelint = require('stylelint');
const { pluginNamespace } = require('./utils/plugin-namespace.js');

const { unknownErrorOccurredRuleMessage } = require('./utils/unknownErrorOccurredRuleMessage.js');

const { report, ruleMessages } = stylelint.utils;
const ruleName = pluginNamespace + '/file-name-equal-to-class-name';
const currentModuleFolder = path.dirname(module.parent.filename);

const messages = ruleMessages(ruleName, {
    expectFileNameEqualToClassName: (fileName, className) => `The '${className}' CSS class name is expected to be equal to its '${fileName}' file name`,
    unknownErrorOccurred: unknownErrorOccurredRuleMessage
});

const ruleFunction = () => {
    return (root, result) => {
        console.log(ruleName);

        // eachDeclarationBlock
        // https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-no-duplicate-properties/index.js
        // https://github.com/stylelint/stylelint/tree/main/lib/utils
        // https://github.com/search?q=stylelint+walkDecls&type=code
        // https://github.com/nskazki/stylelint-selector-custom-tag-pattern/blob/master/index.js
        // https://github.com/search?p=1&q=stylelint+%22walkTags%22&type=Code
        // https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-type-no-unknown/index.js
        // https://postcss.org/api/  -- AtRule#walkDecls()
        // https://postcss.org/api/#root
        
        root.walkRules((rule) => {
            try {
                console.log(rule);
                //console.log(rule.source);
                //console.log(rule.type);
                //console.log(rule.name);
                const cssFullFilePath = rule.source.input.file;
                // const cssRelativeFilePath = path.relative(currentModuleFolder, cssFullFilePath);
                // if (!cssRelativeFilePath.match(/inter/i) && !cssRelativeFilePath.match(/font/i)) {
                //     const fileName = path.basename(cssFullFilePath);
                //     report({ ruleName, result, message: messages.expectFontFaceDeclarationInFontsFile(fileName), node: rule, word: rule.source?.input?.css });
                // }
            }
            catch (e) {
                /* istanbul ignore next */
                report({ ruleName, result, message: messages.unknownErrorOccurred(e), node: rule });
            }
        });
    };
};

ruleFunction.ruleName = ruleName;
ruleFunction.messages = messages;

module.exports = stylelint.createPlugin(ruleName, ruleFunction);
