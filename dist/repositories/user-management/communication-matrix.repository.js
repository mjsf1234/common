"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationMatrixRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CommunicationMatrixRepository = class CommunicationMatrixRepository extends __1.BaseLocalRepository {
    constructor(dataSource, accountRepositoryGetter, communicationTopicRepositoryGetter) {
        super(models_1.CommunicationMatrix, dataSource);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.topic = this.createBelongsToAccessorFor('communicationTopic', communicationTopicRepositoryGetter);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
        this.registerInclusionResolver('communicationTopic', this.topic.inclusionResolver);
    }
};
CommunicationMatrixRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('CommunicationTopicRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function])
], CommunicationMatrixRepository);
exports.CommunicationMatrixRepository = CommunicationMatrixRepository;
//# sourceMappingURL=communication-matrix.repository.js.map