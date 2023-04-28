"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvisoryClientMaster = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let AdvisoryClientMaster = class AdvisoryClientMaster extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'customerId', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], AdvisoryClientMaster.prototype, "customerId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'customer_flag', dataType: 'INT', nullable: 'Y' },
        optionLabelIdentifier: 'ADVISORYCUSTOMERFLAG',
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], AdvisoryClientMaster.prototype, "customerFlag", void 0);
AdvisoryClientMaster = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_advisory_client_master_customerId: { keys: { customerId: 1 }, options: { unique: true } }
            },
            postgresql: { tableName: 'advisory_client_master' },
            plural: 'AdvisoryClientsMaster',
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], AdvisoryClientMaster);
exports.AdvisoryClientMaster = AdvisoryClientMaster;
//# sourceMappingURL=advisory-client-master.model.js.map