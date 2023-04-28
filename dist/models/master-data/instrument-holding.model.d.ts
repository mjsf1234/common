import { BaseSQLModel } from '..';
export declare class InstrumentHolding extends BaseSQLModel {
    percentage: number;
    bosCode?: string;
    effectiveDate?: Date;
    parentInstrumentId: number;
    childInstrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentHolding>);
}
export interface InstrumentHoldingRelations {
}
export declare type InstrumentHoldingWithRelations = InstrumentHolding & InstrumentHoldingRelations;
