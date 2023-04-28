import { BaseSQLModel } from '..';
export declare class Rating extends BaseSQLModel {
    id?: number;
    vendorName?: string;
    rating: string;
    normalizedRating?: string;
    description?: string;
    bosCode?: string;
    fundooCode?: string;
    [prop: string]: any;
    constructor(data?: Partial<Rating>);
}
export interface RatingRelations {
}
export declare type RatingWithRelations = Rating & RatingRelations;
