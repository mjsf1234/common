import { BaseSQLModel } from '..';
export declare class BankBranch extends BaseSQLModel {
    branchName?: string;
    ifscCode: string;
    micrCode?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    bankId: number;
    addressId: number;
    [prop: string]: any;
    constructor(data?: Partial<BankBranch>);
}
export interface BankBranchRelations {
}
export declare type BankBranchWithRelations = BankBranch & BankBranchRelations;
