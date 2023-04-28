"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyCircularJSON = void 0;
const stringifyCircularJSON = (obj) => {
    const seen = new WeakSet();
    return JSON.stringify(obj, (k, v) => {
        if (v !== null && typeof v === 'object') {
            if (seen.has(v))
                return;
            seen.add(v);
        }
        return v;
    });
};
exports.stringifyCircularJSON = stringifyCircularJSON;
//# sourceMappingURL=circular-replacer-json.js.map