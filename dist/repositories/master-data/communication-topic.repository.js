"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicationTopicRepository = void 0;
const tslib_1 = require("tslib");
const __1 = require("..");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let CommunicationTopicRepository = class CommunicationTopicRepository extends __1.BaseLocalRepository {
    constructor(dataSource, communicationMatrixRepositoryGetter) {
        super(models_1.CommunicationTopic, dataSource);
        this.communicationMatrix = this.createHasManyRepositoryFactoryFor('communicationMatrix', communicationMatrixRepositoryGetter);
        this.registerInclusionResolver('communicationMatrix', this.communicationMatrix.inclusionResolver);
    }
};
CommunicationTopicRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('CommunicationMatrixRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], CommunicationTopicRepository);
exports.CommunicationTopicRepository = CommunicationTopicRepository;
//# sourceMappingURL=communication-topic.repository.js.map