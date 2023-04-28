import { BaseSQLModel } from '..';
export declare class CategoryReturnHistory extends BaseSQLModel {
    bosCode?: string;
    mutualFundEndType?: number;
    performanceShareClass?: string;
    returnDate: Date;
    returnFor1Day?: number;
    returnFor1Week?: number;
    returnFor1Month?: number;
    returnFor3Month?: number;
    returnFor6Month?: number;
    returnFor9Month?: number;
    returnFor1Year?: number;
    returnFor2Year?: number;
    returnFor3Year?: number;
    returnFor4Year?: number;
    returnFor5Year?: number;
    returnFor10Year?: number;
    returnSinceLaunch?: number;
    returnForYTD?: number;
    instrumentCategoryId: number;
    [prop: string]: any;
    constructor(data?: Partial<CategoryReturnHistory>);
}
export interface CategoryReturnHistoryRelations {
}
export declare type CategoryReturnHistoryWithRelations = CategoryReturnHistory & CategoryReturnHistoryRelations;
