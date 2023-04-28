"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ProductRepository = class ProductRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, benchmarkInstrumentRepositoryGetter) {
        super(models_1.Product, dataSource);
        this.benchmarkInstrument = this.createBelongsToAccessorFor('benchmarkInstrument', benchmarkInstrumentRepositoryGetter);
        this.registerInclusionResolver('benchmarkInstrument', this.benchmarkInstrument.inclusionResolver);
    }
};
ProductRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map