import { BaseSQLModel } from '..';
export declare class AccountCategory extends BaseSQLModel {
    name: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<AccountCategory>);
}
export interface AccountCategoryRelations {
}
export declare type AccountCategoryWithRelations = AccountCategory & AccountCategoryRelations;
