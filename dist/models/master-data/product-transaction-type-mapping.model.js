"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTransactionTypeMapping = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const product_model_1 = require("./product.model");
const transaction_type_model_1 = require("./transaction-type.model");
let ProductTransactionTypeMapping = class ProductTransactionTypeMapping extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => product_model_1.Product, {
        name: 'product',
        keyFrom: 'productId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_product', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductTransactionTypeMapping.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => transaction_type_model_1.TransactionType, {
        name: 'transactionType',
        keyFrom: 'transactionTypeId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_transaction_type', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ProductTransactionTypeMapping.prototype, "transactionTypeId", void 0);
ProductTransactionTypeMapping = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'product_transaction_type_mapping' },
            plural: 'ProductTransactionTypeMappings',
            foreignKeys: {
                fkidx_product_transaction_type_mapping_product_fk_id_product: {
                    name: 'fkidx_product_transaction_type_mapping_product_fk_id_product',
                    foreignKey: 'fk_id_product',
                    entityKey: 'id',
                    entity: 'Product'
                },
                fkidx_product_trxn_type_mapping_trxn_type_fk_id_transaction_type: {
                    name: 'fkidx_product_trxn_type_mapping_trxn_type_fk_id_transaction_type',
                    foreignKey: 'fk_id_transaction_type',
                    entityKey: 'id',
                    entity: 'TransactionType'
                }
            },
            hiddenProperties: ['fk_id_product', 'fk_id_transaction_type']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ProductTransactionTypeMapping);
exports.ProductTransactionTypeMapping = ProductTransactionTypeMapping;
//# sourceMappingURL=product-transaction-type-mapping.model.js.map