import { BaseSQLModel } from '..';
export declare class TransactionVerification extends BaseSQLModel {
    otpExpiry?: Date;
    otpGeneration?: Date;
    otp?: string;
    contactNumber?: string;
    verificationStatus?: number;
    uniqueId: string;
    cartItemsId: string;
    otpRetryCount?: number;
    accountId: number;
    cartId: number;
    [prop: string]: any;
    constructor(data?: Partial<TransactionVerification>);
}
export interface TransactionVerificationRelations {
}
export declare type TransactionVerificationWithRelations = TransactionVerification & TransactionVerificationRelations;
