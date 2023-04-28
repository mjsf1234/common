"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionLabelMixin = void 0;
const constants_1 = require("../constants");
class OptionLabelMixin {
    static async register(modelClass) {
        let eligibleProperties = {};
        if (modelClass && modelClass.definition && modelClass.definition.properties) {
            for (let property in modelClass.definition.properties) {
                if (modelClass.definition.properties[property]['optionLabelIdentifier']) {
                    eligibleProperties[property] = {
                        label: property + 'Label',
                        identifier: modelClass.definition.properties[property]['optionLabelIdentifier']
                    };
                }
            }
        }
        let optionsMapForOptionLabelMixin = {};
        for (let identifier in constants_1.Option.GLOBALOPTIONS) {
            if (!optionsMapForOptionLabelMixin[identifier]) {
                optionsMapForOptionLabelMixin[identifier] = {};
            }
            for (let option in constants_1.Option.GLOBALOPTIONS[identifier]) {
                optionsMapForOptionLabelMixin[identifier][constants_1.Option.GLOBALOPTIONS[identifier][option].value] =
                    constants_1.Option.GLOBALOPTIONS[identifier][option].label;
            }
        }
        modelClass.observe('loaded', async function event(ctx) {
            if (ctx.data) {
                for (let property in eligibleProperties) {
                    ctx.data[eligibleProperties[property]['label']] = getLabel(eligibleProperties[property]['identifier'], ctx.data[property]);
                }
            }
        });
        function getLabel(identifier, value) {
            return optionsMapForOptionLabelMixin[identifier] && optionsMapForOptionLabelMixin[identifier][value]
                ? optionsMapForOptionLabelMixin[identifier][value]
                : null;
        }
    }
}
exports.OptionLabelMixin = OptionLabelMixin;
//# sourceMappingURL=option-label.mixin.js.map