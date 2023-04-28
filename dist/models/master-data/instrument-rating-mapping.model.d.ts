import { BaseSQLModel } from '..';
export declare class InstrumentRatingMapping extends BaseSQLModel {
    percentage: number;
    instrumentId: number;
    ratingId: number;
    ratingClassificarionId?: number;
    [prop: string]: any;
    constructor(data?: Partial<InstrumentRatingMapping>);
}
export interface InstrumentRatingMappingRelations {
}
export declare type InstrumentRatingMappingWithRelations = InstrumentRatingMapping & InstrumentRatingMappingRelations;
