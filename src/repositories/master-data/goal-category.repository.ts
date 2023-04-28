import {BaseLocalRepository, GoalRepository} from '..';
import {BelongsToAccessor, Getter, HasOneRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Goal, GoalCategory, GoalCategoryRelations} from '../../models';

export class GoalCategoryRepository extends BaseLocalRepository<GoalCategory, typeof GoalCategory.prototype.id, GoalCategoryRelations> {
  public readonly parentId: BelongsToAccessor<GoalCategory, typeof GoalCategory.prototype.id>;
  public readonly goal: HasOneRepositoryFactory<Goal, typeof Goal.prototype.id>;
  constructor(dataSource: juggler.DataSource, @repository.getter('GoalRepository') goalRepositoryGetter: Getter<GoalRepository>) {
    super(GoalCategory, dataSource);
    this.goal = this.createHasOneRepositoryFactoryFor('goal', goalRepositoryGetter);
    this.registerInclusionResolver('goalCategory', this.goal.inclusionResolver);
  }
}
