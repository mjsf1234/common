import { BaseLocalRepository, GoalRepository } from '..';
import { BelongsToAccessor, Getter, HasOneRepositoryFactory, juggler } from '@loopback/repository';
import { Goal, GoalCategory, GoalCategoryRelations } from '../../models';
export declare class GoalCategoryRepository extends BaseLocalRepository<GoalCategory, typeof GoalCategory.prototype.id, GoalCategoryRelations> {
    readonly parentId: BelongsToAccessor<GoalCategory, typeof GoalCategory.prototype.id>;
    readonly goal: HasOneRepositoryFactory<Goal, typeof Goal.prototype.id>;
    constructor(dataSource: juggler.DataSource, goalRepositoryGetter: Getter<GoalRepository>);
}
