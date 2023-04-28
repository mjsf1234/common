"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBTransactionUtils = void 0;
const _1 = require(".");
class DBTransactionUtils {
    static async rollback(tx, methodName) {
        _1.LoggingUtils.info(`Before rollback => ${methodName}`);
        if (tx && tx.connection && tx.connection.txId) {
            await tx.rollback();
        }
        tx = null;
        _1.LoggingUtils.info(`After rollback => ${methodName}`);
    }
    static async commit(tx, methodName) {
        _1.LoggingUtils.info(`Before Commit => ${methodName}`);
        if (tx && tx.connection && tx.connection.txId) {
            await tx.commit();
        }
        tx = null;
        _1.LoggingUtils.info(`After Commit => ${methodName}`);
    }
}
exports.DBTransactionUtils = DBTransactionUtils;
//# sourceMappingURL=db-transaction-utils.js.map