import { BaseLocalRepository, InstrumentCategoryRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { CategoryReturnHistory, CategoryReturnHistoryRelations, InstrumentCategory } from '../../models';
export declare class CategoryReturnHistoryRepository extends BaseLocalRepository<CategoryReturnHistory, typeof CategoryReturnHistory.prototype.id, CategoryReturnHistoryRelations> {
    readonly instrumentCategory: BelongsToAccessor<InstrumentCategory, typeof CategoryReturnHistory.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentCategoryRepositoryGetter: Getter<InstrumentCategoryRepository>);
}
