"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNotificationTokenRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let UserNotificationTokenRepository = class UserNotificationTokenRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter) {
        super(models_1.UserNotificationToken, dataSource);
        this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
        this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    }
};
UserNotificationTokenRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], UserNotificationTokenRepository);
exports.UserNotificationTokenRepository = UserNotificationTokenRepository;
//# sourceMappingURL=user-notification-token.repository.js.map