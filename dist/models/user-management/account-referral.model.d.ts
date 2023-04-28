import { BaseSQLModel } from '..';
export declare class AccountReferral extends BaseSQLModel {
    referralCode: string;
    accountId?: number;
    [prop: string]: any;
    constructor(data?: Partial<AccountReferral>);
}
export interface AccountReferralRelations {
}
export declare type AccountReferralWithRelations = AccountReferral & AccountReferralRelations;
