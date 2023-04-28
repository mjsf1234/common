import { BaseSQLModel } from '..';
export declare class Occupation extends BaseSQLModel {
    id?: number;
    name: string;
    type?: string;
    description?: string;
    bosCode?: string;
    nseCode?: string;
    bseCode?: string;
    coreBankCode?: Array<string>;
    [prop: string]: any;
    constructor(data?: Partial<Occupation>);
}
export interface OccupationRelations {
}
export declare type OccupationWithRelations = Occupation & OccupationRelations;
