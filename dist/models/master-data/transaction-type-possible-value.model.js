"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionTypePossibleValue = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const transaction_type_model_1 = require("./transaction-type.model");
let TransactionTypePossibleValue = class TransactionTypePossibleValue extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        id: 1,
        generated: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionTypePossibleValue.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'value', dataType: 'VARCHAR', dataLength: 255, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], TransactionTypePossibleValue.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_applicable_for_reverse_feed', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TransactionTypePossibleValue.prototype, "isApplicableForReverseFeed", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        default: false,
        postgresql: { columnName: 'is_applicable_for_cas', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], TransactionTypePossibleValue.prototype, "isApplicableForCAS", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => transaction_type_model_1.TransactionType, {
        name: 'transactionType',
        keyFrom: 'transactionTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], TransactionTypePossibleValue.prototype, "transactionTypeId", void 0);
TransactionTypePossibleValue = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            forceId: false,
            postgresql: { tableName: 'transaction_type_possible_value' },
            plural: 'TransactionTypePossibleValues',
            foreignKeys: {
                fkidx_transaction_type_possible_value_transaction_type_fk_id: {
                    name: 'fkidx_transaction_type_possible_value_transaction_type_fk_id',
                    foreignKey: 'fk_id_transaction_type',
                    entityKey: 'id',
                    entity: 'TransactionType'
                }
            },
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_transaction_type_mapping_value: { keys: { value: 1 }, options: { unique: true } }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], TransactionTypePossibleValue);
exports.TransactionTypePossibleValue = TransactionTypePossibleValue;
//# sourceMappingURL=transaction-type-possible-value.model.js.map