"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarvyAnnexureFeedRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let KarvyAnnexureFeedRepository = class KarvyAnnexureFeedRepository extends __1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter) {
        super(models_1.KarvyAnnexureFeed, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
    }
};
KarvyAnnexureFeedRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], KarvyAnnexureFeedRepository);
exports.KarvyAnnexureFeedRepository = KarvyAnnexureFeedRepository;
//# sourceMappingURL=karvy-annexure-feed.repository.js.map