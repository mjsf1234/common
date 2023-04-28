import {BaseLocalRepository} from '../../repositories';
import {Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {RiskProfileQuestion, RiskProfileQuestionPossibleAnswer, RiskProfileQuestionRelations} from '../../models';
import {RiskProfileQuestionPossibleAnswerRepository} from './risk-profile-question-possible-answer.repository';

export class RiskProfileQuestionRepository extends BaseLocalRepository<
  RiskProfileQuestion,
  typeof RiskProfileQuestion.prototype.id,
  RiskProfileQuestionRelations
> {
  public readonly possibleAnswers: HasManyRepositoryFactory<RiskProfileQuestionPossibleAnswer, typeof RiskProfileQuestion.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('RiskProfileQuestionPossibleAnswerRepository')
    riskProfileQuestionPossibleAnswerRepositoryGetter: Getter<RiskProfileQuestionPossibleAnswerRepository>
  ) {
    super(RiskProfileQuestion, dataSource);

    this.possibleAnswers = this.createHasManyRepositoryFactoryFor('possibleAnswers', riskProfileQuestionPossibleAnswerRepositoryGetter);
    this.registerInclusionResolver('possibleAnswers', this.possibleAnswers.inclusionResolver);
  }
}
