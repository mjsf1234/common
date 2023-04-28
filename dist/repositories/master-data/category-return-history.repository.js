"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryReturnHistoryRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CategoryReturnHistoryRepository = class CategoryReturnHistoryRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, instrumentCategoryRepositoryGetter) {
        super(models_1.CategoryReturnHistory, dataSource);
        this.instrumentCategory = this.createBelongsToAccessorFor('instrumentCategory', instrumentCategoryRepositoryGetter);
        this.registerInclusionResolver('instrumentCategory', this.instrumentCategory.inclusionResolver);
    }
};
CategoryReturnHistoryRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('InstrumentCategoryRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], CategoryReturnHistoryRepository);
exports.CategoryReturnHistoryRepository = CategoryReturnHistoryRepository;
//# sourceMappingURL=category-return-history.repository.js.map