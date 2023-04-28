import { BaseSQLModel } from '..';
import { RiskProfileQuestionPossibleAnswer } from './risk-profile-question-possible-answer.model';
export declare class RiskProfileQuestion extends BaseSQLModel {
    id?: number;
    question: string;
    type: number;
    bosCode?: string;
    possibleAnswers?: RiskProfileQuestionPossibleAnswer[];
    [prop: string]: any;
    constructor(data?: Partial<RiskProfileQuestion>);
}
export interface RiskProfileQuestionRelations {
}
export declare type RiskProfileQuestionWithRelations = RiskProfileQuestion & RiskProfileQuestionRelations;
