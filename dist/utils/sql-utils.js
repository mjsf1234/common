"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQLUtils = void 0;
const logging_utils_1 = require("./logging-utils");
class SQLUtils {
    static async executeSQL(datasource, sql, params, callback) {
        const promise = new Promise(function (resolve, reject) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            datasource.connector.execute(sql, params, function (err, result) {
                if (err) {
                    logging_utils_1.LoggingUtils.error(err);
                    return reject(err);
                }
                else {
                    return resolve(result);
                }
            });
        });
        if (callback && typeof callback == 'function') {
            promise
                .then(function (data) {
                callback(null, data);
            })
                .catch(function (err) {
                callback(err);
            });
        }
        else {
            return promise;
        }
    }
}
exports.SQLUtils = SQLUtils;
//# sourceMappingURL=sql-utils.js.map