import { BaseSQLModel } from '..';
export declare class RtaHoldingReconciliation extends BaseSQLModel {
    status: number;
    rtaHoldingUniqueHash: string;
    serviceProviderCode?: string;
    serviceProviderAccountNumber?: string;
    instrumentCode?: string;
    holdingDate?: Date;
    isinCode?: string;
    instrumentName?: string;
    investorName?: string;
    pricePerUnit?: number;
    systenPricePerUnit?: number;
    systemQuantity?: number;
    quantity?: number;
    systemCurrentValue?: number;
    currentValue?: number;
    brokerCode?: string;
    remarks?: string;
    pan?: string;
    reinvestmentFlag?: string;
    systemNavDate?: Date;
    rtaHoldingId: number;
    instrumentId?: number;
    serviceProviderId?: number;
    serviceProviderAccountId?: number;
    uploadedByAppUserId?: number;
    holdingId?: number;
    [prop: string]: any;
    constructor(data?: Partial<RtaHoldingReconciliation>);
}
export interface RtaHoldingReconciliationRelations {
}
export declare type RtaHoldingReconciliationWithRelations = RtaHoldingReconciliation & RtaHoldingReconciliationRelations;
