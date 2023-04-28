import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Asset, InstrumentCategory, InstrumentCategoryAssetExposure, InstrumentCategoryAssetExposureRelations} from '../../models';
import { InstrumentCategoryRepository } from './instrument-category.repository';
import { AssetRepository } from './asset.repository';

export class InstrumentCategoryAssetExposureRepository extends BaseLocalRepository<
  InstrumentCategoryAssetExposure,
  typeof InstrumentCategoryAssetExposure.prototype.id,
  InstrumentCategoryAssetExposureRelations
> {

  public readonly instrumentCategory: BelongsToAccessor<InstrumentCategory, typeof InstrumentCategory.prototype.id>;
  public readonly asset: BelongsToAccessor<Asset, typeof Asset.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('InstrumentCategoryRepository') instrumentCategoryRepositoryGetter: Getter<InstrumentCategoryRepository>,    
    @repository.getter('AssetRepository') assetRepositoryGetter: Getter<AssetRepository>

  ) {
    super(InstrumentCategoryAssetExposure, dataSource);
    this.instrumentCategory = this.createBelongsToAccessorFor('instrumentCategory', instrumentCategoryRepositoryGetter);
    this.asset = this.createBelongsToAccessorFor('asset', assetRepositoryGetter);

    this.registerInclusionResolver('instrumentCategory', this.instrumentCategory.inclusionResolver);
    this.registerInclusionResolver('asset', this.asset.inclusionResolver);
  }
}
