export declare abstract class FormatUtils {
    static formatMobileNumber(mobileNumber: string): number | Error;
    static prependSpaces(number: number | string, digits: number): string;
    static prependZeros(number: number | string, digits: number): string;
    static getCurrencySuffix(amount: number): string;
    static formatAmount(amount: number, suffix: string, decimalPlaces?: number): string;
    static toTitleCase(str: string): string;
    static getFinancialYearFromDate(date: Date): string;
    static panMaskFormat(str: string): string;
    static encodeSpecialCharsInString(str: string): any;
}
