"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let DeviceRepository = class DeviceRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, appUserRepositoryGetter, preLoginUserRepositoryGetter, appVersionRepositoryGetter, idcomDetailsRepositoryGetter) {
        super(models_1.Device, dataSource);
        this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
        this.preLoginUser = this.createBelongsToAccessorFor('preLoginUser', preLoginUserRepositoryGetter);
        this.appVersion = this.createBelongsToAccessorFor('appVersion', appVersionRepositoryGetter);
        this.idcomDetails = this.createHasManyRepositoryFactoryFor('idcomDetails', idcomDetailsRepositoryGetter);
        this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
        this.registerInclusionResolver('preLoginUser', this.preLoginUser.inclusionResolver);
        this.registerInclusionResolver('appVersion', this.appVersion.inclusionResolver);
        this.registerInclusionResolver('idcomDetails', this.idcomDetails.inclusionResolver);
    }
};
DeviceRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AppUserRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('PreLoginUserRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AppVersionRepository')),
    (0, tslib_1.__param)(4, repository_1.repository.getter('IdcomDetailsRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function, Function])
], DeviceRepository);
exports.DeviceRepository = DeviceRepository;
//# sourceMappingURL=device.repository.js.map