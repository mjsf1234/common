"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveDirectoryConfig = void 0;
class ActiveDirectoryConfig {
    static getADConfig() {
        if (!process.env.AD_USER_PASSWORD || !process.env.AD_USER_NAME || !process.env.AD_BASE_DN || !process.env.AD_DOMAIN || !process.env.AD_URL) {
            throw new Error('All the environment variables required to query AD are not');
        }
        const password = Buffer.from(process.env.AD_READER_PASSWORD, 'base64').toString();
        const username = process.env.AD_USER_NAME;
        const baseDN = process.env.AD_BASE_DN;
        const domain = process.env.AD_DOMAIN;
        const url = process.env.AD_URL;
        const config = {
            'url': url,
            'baseDN': baseDN,
            'username': username,
            'password': password,
            'domain': domain
        };
        return config;
    }
}
exports.ActiveDirectoryConfig = ActiveDirectoryConfig;
//# sourceMappingURL=hdfc-active-directory.config.js.map