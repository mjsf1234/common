"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseFeedRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let ReverseFeedRepository = class ReverseFeedRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, rtaRepositoryGetter, uploadedByAppUserRepositoryGetter, transactionAppFileRepositoryGetter, deletedByAppUserRepositoryGetter) {
        super(models_1.ReverseFeed, dataSource);
        this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);
        this.uploadedByAppUser = this.createBelongsToAccessorFor('uploadedByAppUser', uploadedByAppUserRepositoryGetter);
        this.transactionAppFile = this.createBelongsToAccessorFor('transactionAppFile', transactionAppFileRepositoryGetter);
        this.deletedByAppUser = this.createBelongsToAccessorFor('deletedByAppUser', deletedByAppUserRepositoryGetter);
        this.registerInclusionResolver('rta', this.rta.inclusionResolver);
        this.registerInclusionResolver('uploadedByAppUser', this.uploadedByAppUser.inclusionResolver);
        this.registerInclusionResolver('transactionAppFile', this.transactionAppFile.inclusionResolver);
        this.registerInclusionResolver('deletedByAppUser', this.deletedByAppUser.inclusionResolver);
    }
};
ReverseFeedRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RtaRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('TransactionAppFileRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], ReverseFeedRepository);
exports.ReverseFeedRepository = ReverseFeedRepository;
//# sourceMappingURL=reverse-feed.repository.js.map