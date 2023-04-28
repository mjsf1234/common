import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {
  Account,
  RiskProfileQuestion,
  RiskProfileQuestionPossibleAnswer,
  RiskProfileQuestionSubmittedAnswer,
  RiskProfileQuestionSubmittedAnswerRelations
} from '../../models';
import {RiskProfileQuestionPossibleAnswerRepository, RiskProfileQuestionRepository} from '../master-data';
import {AccountRepository} from './account.repository';

export class RiskProfileQuestionSubmittedAnswerRepository extends BaseLocalRepository<
  RiskProfileQuestionSubmittedAnswer,
  typeof RiskProfileQuestionSubmittedAnswer.prototype.id,
  RiskProfileQuestionSubmittedAnswerRelations
> {
  public readonly riskProfileQuestion: BelongsToAccessor<RiskProfileQuestion, typeof RiskProfileQuestionSubmittedAnswer.prototype.id>;
  public readonly riskProfileQuestionPossibleAnswer: BelongsToAccessor<
    RiskProfileQuestionPossibleAnswer,
    typeof RiskProfileQuestionSubmittedAnswer.prototype.id
  >;
  public readonly account: BelongsToAccessor<Account, typeof RiskProfileQuestionSubmittedAnswer.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RiskProfileQuestionRepository') riskProfileQuestionRepositoryGetter: Getter<RiskProfileQuestionRepository>,
    @repository.getter('RiskProfileQuestionPossibleAnswerRepository')
    riskProfileQuestionPossibleAnswerRepositoryGetter: Getter<RiskProfileQuestionPossibleAnswerRepository>,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>
  ) {
    super(RiskProfileQuestionSubmittedAnswer, dataSource);
    this.riskProfileQuestion = this.createBelongsToAccessorFor('riskProfileQuestion', riskProfileQuestionRepositoryGetter);
    this.riskProfileQuestionPossibleAnswer = this.createBelongsToAccessorFor(
      'riskProfileQuestionPossibleAnswer',
      riskProfileQuestionPossibleAnswerRepositoryGetter
    );
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);

    this.registerInclusionResolver('riskProfileQuestion', this.riskProfileQuestion.inclusionResolver);
    this.registerInclusionResolver('riskProfileQuestionPossibleAnswer', this.riskProfileQuestionPossibleAnswer.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
  }
}
