import { BaseSQLModel } from '..';
export declare class BankAccountType extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<BankAccountType>);
}
export interface BankAccountTypeRelations {
}
export declare type BankAccountTypeWithRelations = BankAccountType & BankAccountTypeRelations;
