import { BaseSQLModel } from '..';
export declare class InstrumentSectorMapping extends BaseSQLModel {
    percentage: number;
    bosCode?: string;
    instrumentId: number;
    sectorId: number;
    sectorClassificationId?: number;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentSectorMapping>);
}
export interface InstrumentSectorMappingRelations {
}
export declare type InstrumentSectorMappingWithRelations = InstrumentSectorMapping & InstrumentSectorMappingRelations;
