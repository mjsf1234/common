import { BaseSQLModel } from '..';
export declare class InvestorNominee extends BaseSQLModel {
    nomineePercentage?: number | null;
    guardianRelationship?: number | null;
    guardianName?: string | null;
    isMfNominee?: boolean | null;
    isSyncedViaBank?: boolean | null;
    guardianPanCardNumber?: string | null;
    appUserId: number;
    accountId?: number;
    serviceProviderAccountId?: number;
    bankAccountId?: number;
    addressId?: number;
    relationshipId?: number;
    guardianAddressId?: number;
    [prop: string]: any;
    constructor(data?: Partial<InvestorNominee>);
}
export interface InvestorNomineeRelations {
}
export declare type InvestorNomineeWithRelations = InvestorNominee & InvestorNomineeRelations;
