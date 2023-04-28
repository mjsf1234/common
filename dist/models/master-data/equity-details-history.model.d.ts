import { BaseSQLModel } from '..';
export declare class EquityDetailsHistory extends BaseSQLModel {
    marketCapitalization?: number;
    marketCapitalizationDate?: Date;
    paidUpValue?: number;
    riskRating?: string;
    bosCode?: string;
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<EquityDetailsHistory>);
}
export interface EquityDetailsHistoryRelations {
}
export declare type EquityDetailsHistoryWithRelations = EquityDetailsHistory & EquityDetailsHistoryRelations;
