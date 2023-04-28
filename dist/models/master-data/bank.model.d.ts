import { BaseSQLModel } from '..';
import { BankBranch } from './bank-branch.model';
export declare class Bank extends BaseSQLModel {
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    logoBlobUrl?: string;
    bankUrl?: string;
    bankBranches?: BankBranch[];
    [prop: string]: any;
    constructor(data?: Partial<Bank>);
}
export interface BankRelations {
}
export declare type BankWithRelations = Bank & BankRelations;
