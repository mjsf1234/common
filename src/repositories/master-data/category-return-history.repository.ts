import {BaseLocalRepository, InstrumentCategoryRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {CategoryReturnHistory, CategoryReturnHistoryRelations, InstrumentCategory} from '../../models';

export class CategoryReturnHistoryRepository extends BaseLocalRepository<
  CategoryReturnHistory,
  typeof CategoryReturnHistory.prototype.id,
  CategoryReturnHistoryRelations
> {
  public readonly instrumentCategory: BelongsToAccessor<InstrumentCategory, typeof CategoryReturnHistory.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentCategoryRepository') instrumentCategoryRepositoryGetter: Getter<InstrumentCategoryRepository>
  ) {
    super(CategoryReturnHistory, dataSource);

    this.instrumentCategory = this.createBelongsToAccessorFor('instrumentCategory', instrumentCategoryRepositoryGetter);

    this.registerInclusionResolver('instrumentCategory', this.instrumentCategory.inclusionResolver);
  }
}
