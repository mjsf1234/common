import { BaseSQLModel } from '..';
export declare class RiskProfileHistory extends BaseSQLModel {
    isSubmitted: boolean;
    effectiveDate: Date;
    riskProfileData?: string;
    accountId: number;
    riskProfileId: number;
    [prop: string]: any;
    constructor(data?: Partial<RiskProfileHistory>);
}
export interface RiskProfileHistoryRelations {
}
export declare type RiskProfileHistoryWithRelations = RiskProfileHistory & RiskProfileHistoryRelations;
