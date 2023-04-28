"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SanitizeUtils = void 0;
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
class SanitizeUtils {
    static sanitizeHTML(element) {
        try {
            const window = new JSDOM('').window;
            const DOMPurify = createDOMPurify(window);
            const clean = DOMPurify.sanitize(element);
            return clean;
        }
        catch (_a) {
            throw new Error('There was a error trying to sanitize HTML/SVG');
        }
    }
}
exports.SanitizeUtils = SanitizeUtils;
//# sourceMappingURL=sanitize-utils.js.map