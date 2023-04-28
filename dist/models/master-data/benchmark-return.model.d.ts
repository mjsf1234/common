import { BaseSQLModel } from '..';
export declare class BenchmarkReturn extends BaseSQLModel {
    bosCode?: string;
    returnDate: Date;
    returnFor1Day?: number;
    returnFor1Week?: number;
    returnFor1Month?: number;
    returnFor3Month?: number;
    returnFor6Month?: number;
    returnFor9Month?: number;
    returnFor1Year?: number;
    returnFor2Year?: number;
    returnFor3Year?: number;
    returnFor4Year?: number;
    returnFor5Year?: number;
    returnFor10Year?: number;
    returnSinceLaunch?: number;
    returnForYTD?: number;
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<BenchmarkReturn>);
}
export interface BenchmarkReturnRelations {
}
export declare type BenchmarkReturnWithRelations = BenchmarkReturn & BenchmarkReturnRelations;
