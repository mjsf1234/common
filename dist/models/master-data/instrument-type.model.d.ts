import { BaseSQLModel } from '..';
export declare class InstrumentType extends BaseSQLModel {
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentType>);
}
export interface InstrumentTypeRelations {
}
export declare type InstrumentTypeWithRelations = InstrumentType & InstrumentTypeRelations;
