import { BaseSQLModel } from '..';
export declare class PaymentDetails extends BaseSQLModel {
    gatewayReferenceNumber?: string;
    externalReferenceNumber?: string;
    paymentMode?: number;
    paymentStatus?: number;
    paymentDate?: Date;
    remarks?: string;
    narration?: string;
    reconcilationStatus?: number;
    paymentConfirmationToAMCStatus?: number;
    reversalStatus?: number;
    paymentErrorType?: number;
    debitRetryCount?: number;
    inquiryRetryCount?: number;
    reversalRetryCount?: number;
    debitApiStatus?: number;
    orderItemId: number;
    bankAccountId?: number;
    [prop: string]: any;
    constructor(data?: Partial<PaymentDetails>);
}
export interface PaymentDetailsRelations {
}
export declare type PaymentDetailsWithRelations = PaymentDetails & PaymentDetailsRelations;
