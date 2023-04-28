import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Asset, InstrumentCategory, InstrumentCategoryAssetExposure, InstrumentCategoryAssetExposureRelations } from '../../models';
import { InstrumentCategoryRepository } from './instrument-category.repository';
import { AssetRepository } from './asset.repository';
export declare class InstrumentCategoryAssetExposureRepository extends BaseLocalRepository<InstrumentCategoryAssetExposure, typeof InstrumentCategoryAssetExposure.prototype.id, InstrumentCategoryAssetExposureRelations> {
    readonly instrumentCategory: BelongsToAccessor<InstrumentCategory, typeof InstrumentCategory.prototype.id>;
    readonly asset: BelongsToAccessor<Asset, typeof Asset.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentCategoryRepositoryGetter: Getter<InstrumentCategoryRepository>, assetRepositoryGetter: Getter<AssetRepository>);
}
