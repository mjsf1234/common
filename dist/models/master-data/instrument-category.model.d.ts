import { BaseSQLModel } from '..';
import { CategoryReturnHistory } from './category-return-history.model';
export declare class InstrumentCategory extends BaseSQLModel {
    id?: number;
    name: string;
    bosCode?: string;
    shortName?: string;
    description?: string;
    fundooCode?: string;
    purchaseCutoffTime?: string;
    redemptionCutoffTime?: string;
    config?: object;
    suitability?: object;
    benchmarkInstrumentId?: number;
    assetId?: number;
    categoryGroupId?: number;
    categoryReturnHistories?: CategoryReturnHistory[];
    [prop: string]: any;
    constructor(data?: Partial<InstrumentCategory>);
}
export interface InstrumentCategoryRelations {
}
export declare type InstrumentCategoryWithRelations = InstrumentCategory & InstrumentCategoryRelations;
