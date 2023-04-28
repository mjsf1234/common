import { Operation } from '.';
import { BaseSQLModel, FamilyMapping } from '..';
import { CasRequest } from '../transaction/cas-request.model';
import { Account } from './account.model';
import { Alert } from './alert.model';
import { AppAccessToken } from './app-access-token.model';
import { AppRole } from './app-role.model';
import { Feedback } from './feedback.model';
import { IdcomDetails } from './idcom-details.model';
import { InvestorDetails } from './investor-details.model';
import { MpinHistory } from './mpin-history.model';
import { UserNotificationToken } from './user-notification-token.model';
export declare class AppUser extends BaseSQLModel {
    name: string;
    email?: string;
    emailBelongsTo?: number | null;
    updatedEmail?: string;
    updatedContactNumber?: string;
    updatedDetailsFlag: boolean;
    gender?: number;
    salutation?: number;
    userCode?: string;
    password?: string;
    passwordExpiry?: Date;
    otpRetryCount?: number;
    otpVerificationCount?: number;
    otpExpiry?: Date;
    otpGeneration?: Date;
    loginRetryCount: number;
    contactNumberCountryCode?: string;
    contactNumber?: string;
    contactNumberBelongsTo?: number | null;
    lastLoginDate?: Date;
    config?: object;
    appUserStatus: number;
    forcePasswordChange: boolean;
    tncAcceptanceIpAddress?: string;
    forceTNCAcceptanceRequired?: boolean;
    forceTNCAcceptanceDate?: Date;
    mpinResetDate?: Date;
    oneTimePassword?: string;
    primarySource?: string;
    bosCode?: string;
    secondarySource?: string;
    tertiarySource?: string;
    mpin?: string;
    dematAccNumber?: string;
    dematDpId?: string;
    mpinSetup?: boolean;
    isProfessionalDetailsUpdated?: boolean;
    familyId?: number;
    appFileProfilePictureId?: number;
    txnOTPGeneration?: Date;
    txnOTPRetryCount?: number;
    txnOTPVerificationCount?: number;
    txnOTPExpiry?: Date;
    otpRefNo?: string;
    txnOTPRefNo?: string;
    investorDetails?: InvestorDetails;
    appRoles: AppRole[];
    remarks?: object;
    accessTokens?: AppAccessToken[];
    primaryAccounts?: Account[];
    parentIds?: FamilyMapping[];
    childIds?: FamilyMapping[];
    alerts?: Alert[];
    feedbacks?: Feedback[];
    casRequests?: CasRequest[];
    mpinHistories?: MpinHistory[];
    idcomDetails?: IdcomDetails[];
    userNotificationTokens?: UserNotificationToken[];
    operationDetails?: Operation;
    [prop: string]: any;
    constructor(data?: Partial<AppUser>);
}
export interface AppUserRelations {
}
export declare type AppUserWithRelations = AppUser & AppUserRelations;