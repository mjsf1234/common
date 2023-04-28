import { BaseSQLModel } from '..';
export declare class AdobeNtbUser extends BaseSQLModel {
    mobileNumber?: number;
    dob?: Date;
    crmLeadNo?: number;
    adobeJourneyId: string;
    accountStatus: number;
    userDefinedField1: string;
    userDefinedField2: string;
    userDefinedField3: string;
    userDefinedField4: string;
    userDefinedField5: string;
    appUserId: number;
    constructor(data?: Partial<AdobeNtbUser>);
}
export interface AdobeNtbUserRelations {
}
export declare type AdobeNtbWithRelations = AdobeNtbUser & AdobeNtbUserRelations;
