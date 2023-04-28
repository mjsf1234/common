"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankBranch = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const bank_model_1 = require("./bank.model");
let BankBranch = class BankBranch extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'branch_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankBranch.prototype, "branchName", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'ifsc_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankBranch.prototype, "ifscCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'micr_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankBranch.prototype, "micrCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankBranch.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankBranch.prototype, "nseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BankBranch.prototype, "bseCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => bank_model_1.Bank, {
        name: 'bank',
        keyFrom: 'bankId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_bank', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankBranch.prototype, "bankId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Address, {
        name: 'address',
        keyFrom: 'addressId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_address', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BankBranch.prototype, "addressId", void 0);
BankBranch = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'bank_branch' },
            plural: 'BankBranches',
            foreignKeys: {
                fkidx_bank_branch_bank_fk_id_bank: {
                    name: 'fkidx_bank_branch_bank_fk_id_bank',
                    foreignKey: 'fk_id_bank',
                    entityKey: 'id',
                    entity: 'Bank'
                },
                fkidx_bank_branch_address_fk_id_address: {
                    name: 'fkidx_bank_branch_address_fk_id_address',
                    foreignKey: 'fk_id_address',
                    entityKey: 'id',
                    entity: 'Address'
                }
            },
            hiddenProperties: ['fk_id_bank', 'fk_id_address'],
            indexes: {
                idx_ifsc_code: { keys: { ifsc_code: 1 }, options: { unique: true, caseInsensitiveUnique: true } },
                idx_branch_name: { keys: { branch_name: 1 }, options: { unique: true, caseInsensitiveUnique: true } },
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BankBranch);
exports.BankBranch = BankBranch;
//# sourceMappingURL=bank-branch.model.js.map