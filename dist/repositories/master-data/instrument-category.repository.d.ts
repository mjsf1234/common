import { AssetRepository, BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Asset, CategoryReturnHistory, Instrument, InstrumentCategory, InstrumentCategoryGroup, InstrumentCategoryRelations } from '../../models';
import { InstrumentRepository } from './instrument.repository';
import { CategoryReturnHistoryRepository } from './category-return-history.repository';
import { InstrumentCategoryGroupRepository } from './instrument-category-group.repository';
export declare class InstrumentCategoryRepository extends BaseLocalRepository<InstrumentCategory, typeof InstrumentCategory.prototype.id, InstrumentCategoryRelations> {
    readonly benchmarkInstrument: BelongsToAccessor<Instrument, typeof InstrumentCategory.prototype.id>;
    readonly asset: BelongsToAccessor<Asset, typeof InstrumentCategory.prototype.id>;
    readonly categoryReturnHistories: HasManyRepositoryFactory<CategoryReturnHistory, typeof InstrumentCategory.prototype.id>;
    readonly instrumentCategoryGroup: BelongsToAccessor<InstrumentCategoryGroup, typeof InstrumentCategoryGroup.prototype.id>;
    constructor(dataSource: juggler.DataSource, benchmarkInstrumentRepositoryGetter: Getter<InstrumentRepository>, assetRepositoryRepositoryGetter: Getter<AssetRepository>, categoryReturnHistoryRepositoryGetter: Getter<CategoryReturnHistoryRepository>, instrumentCategoryGroupRepositoryGetter: Getter<InstrumentCategoryGroupRepository>);
}
