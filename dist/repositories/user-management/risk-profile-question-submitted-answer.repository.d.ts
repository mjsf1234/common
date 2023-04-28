import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, RiskProfileQuestion, RiskProfileQuestionPossibleAnswer, RiskProfileQuestionSubmittedAnswer, RiskProfileQuestionSubmittedAnswerRelations } from '../../models';
import { RiskProfileQuestionPossibleAnswerRepository, RiskProfileQuestionRepository } from '../master-data';
import { AccountRepository } from './account.repository';
export declare class RiskProfileQuestionSubmittedAnswerRepository extends BaseLocalRepository<RiskProfileQuestionSubmittedAnswer, typeof RiskProfileQuestionSubmittedAnswer.prototype.id, RiskProfileQuestionSubmittedAnswerRelations> {
    readonly riskProfileQuestion: BelongsToAccessor<RiskProfileQuestion, typeof RiskProfileQuestionSubmittedAnswer.prototype.id>;
    readonly riskProfileQuestionPossibleAnswer: BelongsToAccessor<RiskProfileQuestionPossibleAnswer, typeof RiskProfileQuestionSubmittedAnswer.prototype.id>;
    readonly account: BelongsToAccessor<Account, typeof RiskProfileQuestionSubmittedAnswer.prototype.id>;
    constructor(dataSource: juggler.DataSource, riskProfileQuestionRepositoryGetter: Getter<RiskProfileQuestionRepository>, riskProfileQuestionPossibleAnswerRepositoryGetter: Getter<RiskProfileQuestionPossibleAnswerRepository>, accountRepositoryGetter: Getter<AccountRepository>);
}
