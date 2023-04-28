"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdcomDetailsRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let IdcomDetailsRepository = class IdcomDetailsRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter, deviceRepositoryGetter) {
        super(models_1.IdcomDetails, dataSource);
        this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
        this.device = this.createBelongsToAccessorFor('device', deviceRepositoryGetter);
        this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
        this.registerInclusionResolver('device', this.device.inclusionResolver);
    }
};
IdcomDetailsRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('DeviceRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], IdcomDetailsRepository);
exports.IdcomDetailsRepository = IdcomDetailsRepository;
//# sourceMappingURL=idcom-details.repository.js.map