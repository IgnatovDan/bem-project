const path = require('path');
const stylelint = require('stylelint');
const parseSelector = require('stylelint/lib/utils/parseSelector');
const isKeyframeSelector = require('stylelint/lib/utils/isKeyframeSelector');
const isStandardSyntaxRule = require('stylelint/lib/utils/isStandardSyntaxRule');

const { pluginNamespace } = require('./utils/plugin-namespace.js');

const { unknownErrorOccurredRuleMessage } = require('./utils/unknownErrorOccurredRuleMessage.js');

const { report, ruleMessages } = stylelint.utils;
const ruleName = pluginNamespace + '/class-name-equal-to-file-name';

const messages = ruleMessages(ruleName, {
    expectClassNameToBeEqualToFileName: (fileName, className) => `The CSS class name '${className}' is expected to be equal to its file name '${fileName}'`,
    unknownErrorOccurred: unknownErrorOccurredRuleMessage
});

// based on https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-class-pattern/index.js

const ruleFunction = () => {
    return (root, result) => {
        //console.log(ruleName);

        // eachDeclarationBlock
        // https://github.com/stylelint/stylelint/blob/main/lib/rules/declaration-block-no-duplicate-properties/index.js
        // https://github.com/stylelint/stylelint/tree/main/lib/utils
        // https://github.com/search?q=stylelint+walkDecls&type=code
        // https://github.com/nskazki/stylelint-selector-custom-tag-pattern/blob/master/index.js
        // https://github.com/search?p=1&q=stylelint+%22walkTags%22&type=Code
        // https://github.com/stylelint/stylelint/blob/main/lib/rules/selector-type-no-unknown/index.js
        // https://postcss.org/api/  -- AtRule#walkDecls()
        // https://postcss.org/api/#root

        const cssFullFilePath = root.source?.input?.file;
        const fileName = path.parse(cssFullFilePath).name;
        const fileBase = path.parse(cssFullFilePath).base;

        root.walkRules((rule) => {
            try {
                const selector = rule.selector;
                const selectors = rule.selectors;

                /* istanbul ignore next */
                if (!isStandardSyntaxRule(rule)) {
                    return;
                }

                /* istanbul ignore next */
                if (selectors.some((s) => isKeyframeSelector(s))) {
                    return;
                }

                // hasInterpolatingAmpersand(selector) - not supported yet

                parseSelector(selector, result, rule, (selectorTree) => {
                    // https://github.com/postcss/postcss-selector-parser/blob/master/API.md
                    selectorTree.walkClasses((classNode) => {
                        const cssClassName = classNode.value;
                        if (cssClassName !== fileName) {
                            report({ ruleName, result, message: messages.expectClassNameToBeEqualToFileName(fileBase, cssClassName), node: rule, word: rule.source?.input?.css });
                        }
                    })
                });
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
