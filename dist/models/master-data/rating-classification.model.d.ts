import { BaseSQLModel } from '..';
export declare class RatingClassification extends BaseSQLModel {
    name: string;
    description?: string;
    bosCode?: string;
    fundooCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<RatingClassification>);
}
export interface RatingClassificationRelations {
}
export declare type RatingClassificationWithRelations = RatingClassification & RatingClassificationRelations;
