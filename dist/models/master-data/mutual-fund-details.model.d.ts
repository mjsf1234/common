import { BaseSQLModel } from '..';
import { SystematicMethodSetting } from './systematic-method-setting.model';
export declare class MutualFundDetails extends BaseSQLModel {
    amfiName?: string;
    amfiCode?: string;
    startDate?: Date;
    endDate?: Date;
    reinvestmentFlag: string;
    fundManager?: string;
    fundManagerEducation?: string;
    fundManagerExperience?: string;
    fundObjective?: string;
    riskColourName?: string;
    risk?: string;
    fundRating?: string;
    riskGrade?: string;
    returnGrade?: string;
    entryLoad?: number;
    exitLoad?: string;
    expenseRatio?: number;
    turnoverRatio?: number;
    minInvestmentAmount?: number;
    maxInvestmentAmount?: number;
    minAdditionalInvestmentAmount?: number;
    maxAdditionalInvestmentAmount?: number;
    minRedemptionAmount?: number;
    maxRedemptionAmount?: number;
    minRedemptionQuantity?: number;
    maxRedemptionQuantity?: number;
    purchaseAmountMultiplier?: number;
    redemptionAmountMultiplier?: number;
    redemptionQuantityMultiplier?: number;
    settlementDays?: string;
    planType?: number;
    mutualFundType?: number;
    lockinPeriod?: string;
    loadLockin?: string;
    redemptionDays?: string;
    priceEarnings?: number;
    priceToBook?: number;
    averageMaturity?: number;
    yieldToMaturity?: number;
    modDuration?: number;
    isPurchaseAllowed?: boolean;
    isSwitchInAllowed?: boolean;
    isSwitchOutAllowed?: boolean;
    isRedemptionAllowed?: boolean;
    isSIPAllowed?: boolean;
    isSTPAllowed?: boolean;
    isSWPAllowed?: boolean;
    purchaseCutoffTime?: string;
    redemptionCutoffTime?: string;
    minSIPAmount?: number;
    maxSIPAmount?: number;
    absoluteReturn?: number;
    annualReturn?: number;
    standardDeviation?: number;
    mean?: number;
    alpha?: number;
    beta?: number;
    rsquared?: number;
    alphaStated?: number;
    betaStated?: number;
    rsquaredStated?: number;
    jensonAlpha?: number;
    volatility?: number;
    sortinoRatio?: number;
    treynorRatio?: number;
    sharpeRatio?: number;
    informationRatio?: number;
    activeRisk?: number;
    informationRisk?: number;
    returnFor1Month?: number;
    returnFor1Day?: number;
    returnFor3Month?: number;
    returnFor6Month?: number;
    returnFor1Year?: number;
    returnFor2Year?: number;
    returnFor3Year?: number;
    returnFor5Year?: number;
    sharpeRatioFor1Year?: number;
    sharpeRatioFor3Year?: number;
    sharpeRatioFor5Year?: number;
    volatilityFor1Year?: number;
    volatilityFor3Year?: number;
    volatilityFor5Year?: number;
    mutualFundEndType?: number;
    dividendFrequency?: number;
    redemptionType?: number;
    navUpdateFrequency?: number;
    minSWPAmount?: number;
    bankDetails?: object;
    faceValue?: number;
    issueOpenDate?: Date;
    issueCloseDate?: Date;
    allotmentDate?: Date;
    maturityDate?: Date;
    productCode?: string;
    schemeName?: string;
    depAccNo?: string;
    depBank?: string;
    corpus?: number;
    categoryAverage?: boolean;
    exitLoadRemarks?: string;
    rank?: string;
    scripStyle?: string;
    peScore?: number;
    pbScore?: number;
    giantMarketCapPercentage?: number;
    largeMarketCapPercentage?: number;
    midMarketCapPercentage?: number;
    smallMarketCapPercentage?: number;
    tinyMarketCapPercentage?: number;
    issueActualCloseDate?: Date;
    instrumentId: number;
    directSchemeInstrumentId?: number;
    primarySchemeInstrumentId?: number;
    systematicMethodSettings?: SystematicMethodSetting[];
    [prop: string]: any;
    constructor(data?: Partial<MutualFundDetails>);
}
export interface MutualFundDetailsRelations {
}
export declare type MutualFundDetailsWithRelations = MutualFundDetails & MutualFundDetailsRelations;
