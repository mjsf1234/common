"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfileQuestionPossibleAnswerRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let RiskProfileQuestionPossibleAnswerRepository = class RiskProfileQuestionPossibleAnswerRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, riskProfileQuestionRepositoryGetter) {
        super(models_1.RiskProfileQuestionPossibleAnswer, dataSource);
        this.riskProfileQuestion = this.createBelongsToAccessorFor('riskProfileQuestion', riskProfileQuestionRepositoryGetter);
        this.registerInclusionResolver('riskProfileQuestion', this.riskProfileQuestion.inclusionResolver);
    }
};
RiskProfileQuestionPossibleAnswerRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RiskProfileQuestionRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], RiskProfileQuestionPossibleAnswerRepository);
exports.RiskProfileQuestionPossibleAnswerRepository = RiskProfileQuestionPossibleAnswerRepository;
//# sourceMappingURL=risk-profile-question-possible-answer.repository.js.map