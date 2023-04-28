import { BaseSQLModel } from '..';
export declare class IncomeSlab extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    coreBankCode?: string[];
    [prop: string]: any;
    constructor(data?: Partial<IncomeSlab>);
}
export interface IncomeSlabRelations {
}
export declare type IncomeSlabWithRelations = IncomeSlab & IncomeSlabRelations;
