"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compression = void 0;
const compression = require('compression');
class Compression {
    static Compress() {
        return compression({ filter: this.shouldCompress });
    }
    static shouldCompress(req, res) {
        if (req.headers['x-no-compression']) {
            // don't compress responses with this request header
            return false;
        }
        // fallback to standard filter function
        return compression.filter(req, res);
    }
}
exports.Compression = Compression;
//# sourceMappingURL=compression.js.map