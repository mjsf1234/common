"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PollingCheck = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let PollingCheck = class PollingCheck extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'activity_name', dataType: 'VARCHAR', nullable: 'Y', dataLength: 120 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PollingCheck.prototype, "activityName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        deafult: 1,
        optionLabelIdentifier: 'POLLINGSTATUS',
        postgresql: { columnName: 'activity_status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PollingCheck.prototype, "activityStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PollingCheck.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], PollingCheck.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PollingCheck.prototype, "accountId", void 0);
PollingCheck = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'polling_check' },
            plural: 'PollingChecks',
            foreignKeys: {
                fkidx_polling_check_account_fk_id_account: {
                    name: 'fkidx_polling_check_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                }
            },
            hiddenProperties: ['fk_id_account']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], PollingCheck);
exports.PollingCheck = PollingCheck;
//# sourceMappingURL=polling-check.model.js.map