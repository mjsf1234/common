import { BaseSQLModel, PaymentDetails } from '..';
import { Transaction } from '../transaction';
export declare class OrderItem extends BaseSQLModel {
    lineNumber: number;
    uniqueId?: string;
    orderDate: Date;
    reverseFeedUniqueHash?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    rtaCode?: string;
    externalServiceProviderAccount?: string;
    orderItemStatus: number;
    serviceProviderAccountOption?: number;
    stopLossTriggerPrice?: number;
    stopLossBookingProfit?: number;
    systematicMethodFrequency?: number;
    numberOfInstallments?: number;
    systematicStartDate?: Date;
    quantity?: number;
    pricePerUnit?: number;
    totalAmount?: number;
    committedAmount?: number;
    accruedInterest?: number;
    stampDuty?: number;
    serviceProviderReferenceNumber?: string;
    remarks?: string;
    bsePurchaseType?: number;
    bseRedemptionType?: number;
    isAllUnits: boolean;
    isReconciled: boolean;
    confirmedDate?: Date;
    confirmedQuantity?: number;
    confirmedPricePerUnit?: number;
    confirmedServiceProviderAccount?: string;
    confirmedTotalAmount?: number;
    bseOrderRemarks?: string;
    bseOrderStatus?: string;
    orderMedium?: string;
    valueDate?: Date;
    orderItemSentStatus: number;
    config?: any;
    paymentConfirmationToAMCStatus: number;
    orderItemSource?: number;
    registeredEmail?: string;
    registeredMobile?: string;
    isNomineeDocumentGenerated?: boolean;
    orderId: number;
    instrumentId: number;
    secondaryInstrumentId?: number;
    serviceProviderAccountId?: number;
    currencyId: number;
    transactionTypeId: number;
    systematicMethodId?: number;
    goalId?: number;
    secondaryGoalId?: number;
    rtaId?: number;
    txnFeedLogId?: number;
    transaction?: Transaction;
    paymentDetails?: PaymentDetails;
    'paymentConfirmationFeedLogId': number;
    transactionTwoFaSmsId?: number;
    transactionTwoFaEmailId?: number;
    [prop: string]: any;
    constructor(data?: Partial<OrderItem>);
}
export interface OrderItemRelations {
}
export declare type OrderItemWithRelations = OrderItem & OrderItemRelations;