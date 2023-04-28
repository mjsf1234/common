import { BaseSQLModel } from '..';
export declare class RiskProfileQuestionPossibleAnswer extends BaseSQLModel {
    id?: number;
    answer: string;
    description?: string;
    score: number;
    bosCode?: string;
    riskProfileQuestionId: number;
    [prop: string]: any;
    constructor(data?: Partial<RiskProfileQuestionPossibleAnswer>);
}
export interface RiskProfileQuestionPossibleAnswerRelations {
}
export declare type RiskProfileQuestionPossibleAnswerWithRelations = RiskProfileQuestionPossibleAnswer & RiskProfileQuestionPossibleAnswerRelations;
