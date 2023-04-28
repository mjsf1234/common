import { BaseLocalRepository } from '../../repositories';
import { Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { RiskProfileQuestion, RiskProfileQuestionPossibleAnswer, RiskProfileQuestionRelations } from '../../models';
import { RiskProfileQuestionPossibleAnswerRepository } from './risk-profile-question-possible-answer.repository';
export declare class RiskProfileQuestionRepository extends BaseLocalRepository<RiskProfileQuestion, typeof RiskProfileQuestion.prototype.id, RiskProfileQuestionRelations> {
    readonly possibleAnswers: HasManyRepositoryFactory<RiskProfileQuestionPossibleAnswer, typeof RiskProfileQuestion.prototype.id>;
    constructor(dataSource: juggler.DataSource, riskProfileQuestionPossibleAnswerRepositoryGetter: Getter<RiskProfileQuestionPossibleAnswerRepository>);
}
