import { BaseESModel } from '../base-es-model.model';
export declare class BalanceSheetReporting extends BaseESModel {
    id?: number;
    clientId?: string;
    accountNumber?: string;
    permanentCity?: string;
    correspondenceCity?: string;
    name?: string;
    riskProfileName?: string;
    isCASUploaded?: boolean;
    totalNoOfGoals?: number;
    equityAum?: number;
    aum?: number;
    debtArbitrageAum?: number;
    liquidOvernightAum?: number;
    noOfMfSchemes?: number;
    tiDate?: Date | null;
    toDate?: Date | null;
    totalNoOfHoldingGoals?: number;
    itemsPendingInCart?: object[];
    accountOpeningDate?: Date;
    gender?: string;
    age?: number;
    investorType?: string;
    employerName?: string;
    employerCategory?: string;
    occupation?: string;
    sourceOfFunds?: string;
    grossAnnualIncome?: string;
    politicalExposure?: string;
    grossMonthlyIncome?: string;
    countryOfTaxResidency?: string;
    taxIdentificationNumber?: string;
    taxStatus?: string;
    holdingType?: string;
    [prop: string]: any;
    constructor(data?: Partial<BalanceSheetReporting>);
}
export interface BalanceSheetReportingRelations {
}
export declare type BalanceSheetReportingWithRelations = BalanceSheetReporting & BalanceSheetReportingRelations;
