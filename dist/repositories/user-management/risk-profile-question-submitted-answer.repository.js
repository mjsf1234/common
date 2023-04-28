"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfileQuestionSubmittedAnswerRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let RiskProfileQuestionSubmittedAnswerRepository = class RiskProfileQuestionSubmittedAnswerRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, riskProfileQuestionRepositoryGetter, riskProfileQuestionPossibleAnswerRepositoryGetter, accountRepositoryGetter) {
        super(models_1.RiskProfileQuestionSubmittedAnswer, dataSource);
        this.riskProfileQuestion = this.createBelongsToAccessorFor('riskProfileQuestion', riskProfileQuestionRepositoryGetter);
        this.riskProfileQuestionPossibleAnswer = this.createBelongsToAccessorFor('riskProfileQuestionPossibleAnswer', riskProfileQuestionPossibleAnswerRepositoryGetter);
        this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
        this.registerInclusionResolver('riskProfileQuestion', this.riskProfileQuestion.inclusionResolver);
        this.registerInclusionResolver('riskProfileQuestionPossibleAnswer', this.riskProfileQuestionPossibleAnswer.inclusionResolver);
        this.registerInclusionResolver('account', this.account.inclusionResolver);
    }
};
RiskProfileQuestionSubmittedAnswerRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RiskProfileQuestionRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('RiskProfileQuestionPossibleAnswerRepository')),
    (0, tslib_1.__param)(3, repository_1.repository.getter('AccountRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function, Function, Function])
], RiskProfileQuestionSubmittedAnswerRepository);
exports.RiskProfileQuestionSubmittedAnswerRepository = RiskProfileQuestionSubmittedAnswerRepository;
//# sourceMappingURL=risk-profile-question-submitted-answer.repository.js.map