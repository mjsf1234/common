import { BaseSQLModel } from '..';
export declare class CartItem extends BaseSQLModel {
    lineNumber: number;
    frequency?: number;
    frequencyDay?: number;
    startDateForSip?: Date;
    endDateForSip?: Date;
    quantity?: number;
    transactionSubType?: number;
    externalServiceProviderAccount?: string;
    pricePerUnit?: number;
    totalAmount?: number;
    remarks?: string;
    transactionCount?: number;
    config?: any;
    isAllUnits: boolean;
    isStopSip?: boolean;
    isRebalancingItem?: boolean;
    isValidItem?: boolean;
    isSpecificValid?: boolean;
    validationMessage?: string;
    specificValidationMessage?: string;
    verifiedOtpDate?: Date | null;
    cartId: number;
    instrumentId: number;
    secondaryInstrumentId?: number;
    serviceProviderAccountId?: number;
    transactionTypeId: number;
    goalId?: number;
    systematicMethodId?: number;
    transactionTwoFaSmsId?: number;
    transactionTwoFaEmailId?: number;
    [prop: string]: any;
    constructor(data?: Partial<CartItem>);
}
export interface CartItemRelations {
}
export declare type CartItemWithRelations = CartItem & CartItemRelations;
