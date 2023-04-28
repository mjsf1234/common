"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasRequestRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CasRequestRepository = class CasRequestRepository extends __1.BaseLocalRepository {
    constructor(dataSource, userRepositoryGetter, 
    //@todo local app-file repository getter
    transactionAppFileRepositoryGetter) {
        super(models_1.CasRequest, dataSource);
        this.transactionAppFile = this.createBelongsToAccessorFor('transactionAppFile', transactionAppFileRepositoryGetter);
        this.user = this.createBelongsToAccessorFor('appUser', userRepositoryGetter);
        //@todo local app File inclusion resolver
        this.registerInclusionResolver('transactionAppFile', this.transactionAppFile.inclusionResolver);
        this.registerInclusionResolver('appUser', this.user.inclusionResolver);
    }
};
CasRequestRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('TransactionAppFileRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], CasRequestRepository);
exports.CasRequestRepository = CasRequestRepository;
//# sourceMappingURL=cas-request.repository.js.map