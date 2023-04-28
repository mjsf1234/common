import { BaseSQLModel } from '..';
export declare class RiskProfileQuestionSubmittedAnswer extends BaseSQLModel {
    submitted: boolean;
    riskProfileQuestionId: number;
    riskProfileQuestionPossibleAnswerId: number;
    accountId: number;
    [prop: string]: any;
    constructor(data?: Partial<RiskProfileQuestionSubmittedAnswer>);
}
export interface RiskProfileQuestionSubmittedAnswerRelations {
}
export declare type RiskProfileQuestionSubmittedAnswerWithRelations = RiskProfileQuestionSubmittedAnswer & RiskProfileQuestionSubmittedAnswerRelations;
