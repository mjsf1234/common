"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewUtils = void 0;
const tslib_1 = require("tslib");
const fs_1 = (0, tslib_1.__importDefault)(require("fs"));
const underscore_1 = (0, tslib_1.__importDefault)(require("underscore"));
class ViewUtils {
    //remember, the absoluteTemplatePath is absolute one
    static getCompiledHtml(absoluteTemplatePath, data) {
        let encoding, templateContent;
        templateContent = fs_1.default.readFileSync(absoluteTemplatePath, (encoding = 'utf8'));
        const templatize = underscore_1.default.template(templateContent);
        return templatize(data);
    }
}
exports.ViewUtils = ViewUtils;
//# sourceMappingURL=view-utils.js.map