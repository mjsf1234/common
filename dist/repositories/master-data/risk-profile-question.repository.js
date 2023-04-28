"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfileQuestionRepository = void 0;
const tslib_1 = require("tslib");
const repositories_1 = require("../../repositories");
const repository_1 = require("@loopback/repository");
const models_1 = require("../../models");
let RiskProfileQuestionRepository = class RiskProfileQuestionRepository extends repositories_1.BaseLocalRepository {
    constructor(dataSource, riskProfileQuestionPossibleAnswerRepositoryGetter) {
        super(models_1.RiskProfileQuestion, dataSource);
        this.possibleAnswers = this.createHasManyRepositoryFactoryFor('possibleAnswers', riskProfileQuestionPossibleAnswerRepositoryGetter);
        this.registerInclusionResolver('possibleAnswers', this.possibleAnswers.inclusionResolver);
    }
};
RiskProfileQuestionRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(1, repository_1.repository.getter('RiskProfileQuestionPossibleAnswerRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [repository_1.juggler.DataSource, Function])
], RiskProfileQuestionRepository);
exports.RiskProfileQuestionRepository = RiskProfileQuestionRepository;
//# sourceMappingURL=risk-profile-question.repository.js.map