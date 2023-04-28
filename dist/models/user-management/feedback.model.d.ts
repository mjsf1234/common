import { BaseSQLModel } from '..';
export declare class Feedback extends BaseSQLModel {
    name: string;
    email: string;
    content: string;
    appUserId: number;
    [prop: string]: any;
    constructor(data?: Partial<Feedback>);
}
export interface FeedbackRelations {
}
export declare type FeedbackWithRelations = Feedback & FeedbackRelations;
