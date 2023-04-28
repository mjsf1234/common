"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
class RSMQConfiguration {
    constructor() {
        var _a, _b, _c, _d, _e, _f;
        this.host = (_a = process.env.COMMON_DS_CACHE_REDIS_HOST) !== null && _a !== void 0 ? _a : '127.0.0.1';
        this.port = +((_b = process.env.COMMON_DS_CACHE_REDIS_PORT) !== null && _b !== void 0 ? _b : 6379);
        if (process.env.COMMON_DS_REDIS_TLS_ENABLED && process.env.COMMON_DS_REDIS_TLS_ENABLED == 'true') {
            this.options = {
                tls: {
                    ca: fs.readFileSync(process.env.COMMON_DS_REDIS_CA_CERT),
                    rejectUnauthorized: false
                }
            };
        }
        switch (process.env.COMMON_RSMQ_AUTH_TYPE) {
            case 'AUTH_PASSWORD':
                this.options = { ...this.options, auth_pass: (_c = process.env.COMMON_DS_CACHE_REDIS_PASSWORD) !== null && _c !== void 0 ? _c : '' };
                break;
            case 'PASSWORD':
                this.options = { ...this.options, password: (_d = process.env.COMMON_DS_CACHE_REDIS_PASSWORD) !== null && _d !== void 0 ? _d : '' };
                break;
            case 'BOTH':
                this.options = {
                    ...this.options,
                    auth_pass: (_e = process.env.COMMON_DS_CACHE_REDIS_PASSWORD) !== null && _e !== void 0 ? _e : '',
                    password: (_f = process.env.COMMON_DS_CACHE_REDIS_PASSWORD) !== null && _f !== void 0 ? _f : ''
                };
                break;
            default:
                break;
        }
    }
}
exports.default = RSMQConfiguration;
//# sourceMappingURL=rsmq-configuration.js.map