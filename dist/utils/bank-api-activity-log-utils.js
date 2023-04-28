"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationLog = void 0;
const tslib_1 = require("tslib");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
const fs = require('fs');
const os = require('os');
function applicationLog(logObject) {
    fs.appendFile(path_1.default.join(os.homedir(), 'externalAPI.log'), JSON.stringify(logObject, null, ' '), 'utf-8', (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('success');
        }
    });
}
exports.applicationLog = applicationLog;
//# sourceMappingURL=bank-api-activity-log-utils.js.map