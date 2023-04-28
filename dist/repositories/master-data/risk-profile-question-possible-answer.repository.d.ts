import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { RiskProfileQuestion, RiskProfileQuestionPossibleAnswer, RiskProfileQuestionPossibleAnswerRelations } from '../../models';
import { RiskProfileQuestionRepository } from './risk-profile-question.repository';
export declare class RiskProfileQuestionPossibleAnswerRepository extends BaseLocalRepository<RiskProfileQuestionPossibleAnswer, typeof RiskProfileQuestionPossibleAnswer.prototype.id, RiskProfileQuestionPossibleAnswerRelations> {
    readonly riskProfileQuestion: BelongsToAccessor<RiskProfileQuestion, typeof RiskProfileQuestionPossibleAnswer.prototype.id>;
    constructor(dataSource: juggler.DataSource, riskProfileQuestionRepositoryGetter: Getter<RiskProfileQuestionRepository>);
}
