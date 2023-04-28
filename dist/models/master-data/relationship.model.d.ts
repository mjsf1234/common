import { BaseSQLModel } from '..';
export declare class Relationship extends BaseSQLModel {
    id?: number;
    name: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<Relationship>);
}
export interface RelationshipRelations {
}
export declare type RelationshipWithRelations = Relationship & RelationshipRelations;
