"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTransactionTypeMappingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ProductTransactionTypeMappingRepository = class ProductTransactionTypeMappingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, productRepositoryGetter, transactionTypeRepositoryGetter) {
        super(models_1.ProductTransactionTypeMapping, dataSource);
        this.product = this.createBelongsToAccessorFor('product', productRepositoryGetter);
        this.transactionType = this.createBelongsToAccessorFor('transactionType', transactionTypeRepositoryGetter);
        this.registerInclusionResolver('product', this.product.inclusionResolver);
        this.registerInclusionResolver('transactionType', this.transactionType.inclusionResolver);
    }
};
ProductTransactionTypeMappingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('ProductRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('TransactionTypeRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], ProductTransactionTypeMappingRepository);
exports.ProductTransactionTypeMappingRepository = ProductTransactionTypeMappingRepository;
//# sourceMappingURL=product-transaction-type-mapping.repository.js.map