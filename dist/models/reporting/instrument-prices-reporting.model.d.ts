import { BaseESModel } from '../base-es-model.model';
export declare class InstrumentPricesReporting extends BaseESModel {
    id?: number;
    instrumentPriceId?: number;
    instrumentId?: number;
    instrumentFullName?: string;
    priceDate?: Date;
    price?: number;
    openPrice?: number;
    lowPrice?: number;
    highPrice?: number;
    closePrice?: number;
    movementFromPreviousPrice?: number;
    percentageMovementFromPreviousPrice?: number;
    source?: number;
    accruedInterest?: number;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentPricesReporting>);
}
export interface InstrumentPricesReportingRelations {
}
export declare type InstrumentPricesReportingWithRelations = InstrumentPricesReporting & InstrumentPricesReportingRelations;
