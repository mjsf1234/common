import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {RiskProfileQuestion, RiskProfileQuestionPossibleAnswer, RiskProfileQuestionPossibleAnswerRelations} from '../../models';
import {RiskProfileQuestionRepository} from './risk-profile-question.repository';

export class RiskProfileQuestionPossibleAnswerRepository extends BaseLocalRepository<
  RiskProfileQuestionPossibleAnswer,
  typeof RiskProfileQuestionPossibleAnswer.prototype.id,
  RiskProfileQuestionPossibleAnswerRelations
> {
  public readonly riskProfileQuestion: BelongsToAccessor<RiskProfileQuestion, typeof RiskProfileQuestionPossibleAnswer.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RiskProfileQuestionRepository') riskProfileQuestionRepositoryGetter: Getter<RiskProfileQuestionRepository>
  ) {
    super(RiskProfileQuestionPossibleAnswer, dataSource);
    this.riskProfileQuestion = this.createBelongsToAccessorFor('riskProfileQuestion', riskProfileQuestionRepositoryGetter);

    this.registerInclusionResolver('riskProfileQuestion', this.riskProfileQuestion.inclusionResolver);
  }
}
