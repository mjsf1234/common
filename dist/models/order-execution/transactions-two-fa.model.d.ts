import { BaseSQLModel, CartItem, OrderItem } from '..';
export declare class TransactionTwoFa extends BaseSQLModel {
    txnOTPGeneration?: Date | null;
    txnOTPRetryCount?: number | null;
    txnOTPVerificationCount?: number | null;
    txnOTPExpiry?: Date | null;
    otpVerified?: boolean | null;
    registeredEmail?: string | null;
    registeredMobile?: string | null;
    txnRefNo?: string | null;
    twoFactorAuthType: number;
    config?: any;
    accountId: number;
    cartItemSmsGroups?: CartItem[];
    orderItemSmsGroups?: OrderItem[];
    cartItemEmailGroups?: CartItem[];
    orderItemEmailGroups?: OrderItem[];
    [prop: string]: any;
    constructor(data?: Partial<TransactionTwoFa>);
}
export interface TransactionTwoFaRelations {
}
export declare type TransactionTwoFaWithRelations = TransactionTwoFa & TransactionTwoFaRelations;
