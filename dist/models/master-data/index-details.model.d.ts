import { BaseSQLModel } from '..';
export declare class IndexDetails extends BaseSQLModel {
    instrumentId: number;
    [prop: string]: any;
    constructor(data?: Partial<IndexDetails>);
}
export interface IndexDetailsRelations {
}
export declare type IndexDetailsWithRelations = IndexDetails & IndexDetailsRelations;
