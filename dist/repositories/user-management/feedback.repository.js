"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let FeedbackRepository = class FeedbackRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter) {
        super(models_1.Feedback, dataSource);
        this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
        this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    }
};
FeedbackRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], FeedbackRepository);
exports.FeedbackRepository = FeedbackRepository;
//# sourceMappingURL=feedback.repository.js.map