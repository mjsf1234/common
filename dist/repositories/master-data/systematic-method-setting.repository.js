"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystematicMethodSettingRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let SystematicMethodSettingRepository = class SystematicMethodSettingRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, mutualFundDetailsRepositoryGetter) {
        super(models_1.SystematicMethodSetting, dataSource);
        this.mutualFundDetails = this.createBelongsToAccessorFor('mutualFundDetails', mutualFundDetailsRepositoryGetter);
        this.registerInclusionResolver('mutualFundDetails', this.mutualFundDetails.inclusionResolver);
    }
};
SystematicMethodSettingRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('MutualFundDetailsRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], SystematicMethodSettingRepository);
exports.SystematicMethodSettingRepository = SystematicMethodSettingRepository;
//# sourceMappingURL=systematic-method-setting.repository.js.map