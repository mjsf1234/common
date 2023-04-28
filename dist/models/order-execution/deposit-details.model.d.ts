import { BaseSQLModel } from '..';
export declare class DepositDetails extends BaseSQLModel {
    type?: number;
    mode?: number;
    maturityDate?: Date;
    name?: string;
    investedValue?: number;
    totalCurrentValue?: number;
    tenureMonths?: number;
    tenureYears?: number;
    tenureDays?: number;
    interestRate?: number;
    startDate?: Date;
    frequency?: string;
    interestFrequency?: number;
    compoundingFrequency?: number;
    maturityAmount?: number;
    installmentAmount?: number;
    installmentDate?: Date;
    status?: number;
    isSellAllowed?: boolean;
    subType?: number;
    actionOnMaturity?: number;
    totalInterestPayable?: number;
    totalInstallments?: number;
    totalRedemptionAmount?: number;
    redemptionDate?: Date;
    currentInstallment?: number;
    payoutAmount?: number;
    lastRenewalDate?: Date;
    bankDetails?: object;
    nomineeDetails?: object;
    userKycDetails?: object;
    journeyState?: number;
    Remarks?: String;
    instrumentId?: number;
    serviceProviderAccountId: number;
    currencyId: number;
    accountId: number;
    [prop: string]: any;
    constructor(data?: Partial<DepositDetails>);
}
export interface DepositDetailsRelations {
}
export declare type DepositDetailsWithRelations = DepositDetails & DepositDetailsRelations;
