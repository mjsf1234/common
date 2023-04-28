import { ModelPortfolioInstrument, Account, CartItem } from "../models";
export declare abstract class GoalUtils {
    static checkRebalancingNeedForGoal(goalInfo: any): any;
    static calculateDeviations(portfolioCategoryExposures: any, monthsToGoal: number, totalAmount: number, riskProfileId: number, isLumpsum: boolean): any;
    static sortAbsoluteValues(objectArray: any, sortProperty: string, order: string): any;
    static getAggregateDeviations(masterArray: any, masterArrayNames: any, totalExposureArray: any, modelPortfolioLevel: string, outputKeyName: string, outputKeyValueName: string, modelPortfolioAllocations: any): any;
    static flattenToArray(inputDataObject: any, assetCategoryKey: string, valueKey: string): any;
    static getGoalInvestmentNeeded(targetAmount: number, yearsToGoal: number, riskProfileId: number, initialInvestment?: number, initialSIP?: number): any;
    static getReturnArray(yearsToGoal: number, riskProfileId: number): any;
    static setModelPortfolio(monthsToGoal: number, totalAmount: number, riskProfileId: number, isLumpsum: boolean): any;
    static createCategoryCrossExpMatrix(): any;
    static sumProduct(inputArray: any, inputArrayProperty: string, doForAssetCategoryArray: any, multiplierArray: any, joinProperty: string, outputProperty: string): any;
    static createWtArray(masterArray: any): any;
    static returnAssetFromCategory(categoryWeightArray: any, weightField?: string, categoryField?: string): any;
    static alignModelPortfolio(inputData: Array<ModelPortfolioInstrument>, lumpsumAmount: number, sipAmount: number, holdingData?: Partial<Account> | null): any;
    static getRecommendationTypeLabel(recommendationType: number | null, defaultReturnLabel: string): string;
    static alignPortfolioData(inputData: any): any;
    static convertSIPFrequencytoMonthly(sipFrequency: number): number;
    static createRebalanceCartItems(goalInformation: any, portfolioData: any, isLumpsum: boolean, returnCartItems: Array<Partial<CartItem>>): any;
}
