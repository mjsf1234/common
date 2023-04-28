"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethodLog = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const transaction_1 = require("../transaction");
let SystematicMethodLog = class SystematicMethodLog extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'sytematic_registration_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethodLog.prototype, "systematicRegistrationNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'failed_date', dataType: 'TIMESTAMP', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], SystematicMethodLog.prototype, "failedDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], SystematicMethodLog.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => transaction_1.SystematicMethod, {
        name: 'systematicMethod',
        keyFrom: 'systematicMethodId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_systematic_method', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], SystematicMethodLog.prototype, "systematicMethodId", void 0);
SystematicMethodLog = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            plural: 'SystematicMethodLogs',
            postgresql: { tableName: 'systematic_method_log' },
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], SystematicMethodLog);
exports.SystematicMethodLog = SystematicMethodLog;
//# sourceMappingURL=systematic-method-log.model.js.map