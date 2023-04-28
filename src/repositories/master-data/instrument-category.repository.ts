import {AssetRepository, BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Asset, CategoryReturnHistory, Instrument, InstrumentCategory, InstrumentCategoryGroup, InstrumentCategoryRelations} from '../../models';
import {InstrumentRepository} from './instrument.repository';
import {CategoryReturnHistoryRepository} from './category-return-history.repository';
import { InstrumentCategoryGroupRepository } from './instrument-category-group.repository';

export class InstrumentCategoryRepository extends BaseLocalRepository<
  InstrumentCategory,
  typeof InstrumentCategory.prototype.id,
  InstrumentCategoryRelations
> {
  public readonly benchmarkInstrument: BelongsToAccessor<Instrument, typeof InstrumentCategory.prototype.id>;
  public readonly asset: BelongsToAccessor<Asset, typeof InstrumentCategory.prototype.id>;
  public readonly categoryReturnHistories: HasManyRepositoryFactory<CategoryReturnHistory, typeof InstrumentCategory.prototype.id>;

  public readonly instrumentCategoryGroup: BelongsToAccessor<InstrumentCategoryGroup, typeof InstrumentCategoryGroup.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentRepository') benchmarkInstrumentRepositoryGetter: Getter<InstrumentRepository>,
    @repository.getter('AssetRepository') assetRepositoryRepositoryGetter: Getter<AssetRepository>,
    @repository.getter('CategoryReturnHistoryRepository') categoryReturnHistoryRepositoryGetter: Getter<CategoryReturnHistoryRepository>,
    @repository.getter('InstrumentCategoryGroupRepository') instrumentCategoryGroupRepositoryGetter: Getter<InstrumentCategoryGroupRepository>
  ) {
    super(InstrumentCategory, dataSource);
    this.benchmarkInstrument = this.createBelongsToAccessorFor('benchmarkInstrument', benchmarkInstrumentRepositoryGetter);
    this.asset = this.createBelongsToAccessorFor('asset', assetRepositoryRepositoryGetter);
    this.categoryReturnHistories = this.createHasManyRepositoryFactoryFor('categoryReturnHistories', categoryReturnHistoryRepositoryGetter);

    this.instrumentCategoryGroup = this.createBelongsToAccessorFor('instrumentCategoryGroup', instrumentCategoryGroupRepositoryGetter);

    this.registerInclusionResolver('benchmarkInstrument', this.benchmarkInstrument.inclusionResolver);
    this.registerInclusionResolver('asset', this.asset.inclusionResolver);
    this.registerInclusionResolver('categoryReturnHistories', this.categoryReturnHistories.inclusionResolver);
    this.registerInclusionResolver('instrumentCategoryGroup', this.instrumentCategoryGroup.inclusionResolver);
  }
}
