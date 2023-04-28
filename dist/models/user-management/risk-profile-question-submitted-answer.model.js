"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfileQuestionSubmittedAnswer = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const account_model_1 = require("./account.model");
let RiskProfileQuestionSubmittedAnswer = class RiskProfileQuestionSubmittedAnswer extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
        default: true,
        postgresql: { columnName: 'submitted', dataType: 'BOOLEAN', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], RiskProfileQuestionSubmittedAnswer.prototype, "submitted", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.RiskProfileQuestion, {
        name: 'riskProfileQuestion',
        keyFrom: 'riskProfileQuestionId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_risk_profile_question', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileQuestionSubmittedAnswer.prototype, "riskProfileQuestionId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.RiskProfileQuestionPossibleAnswer, {
        name: 'riskProfileQuestionPossibleAnswer',
        keyFrom: 'riskProfileQuestionPossibleAnswerId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_risk_profile_question_possible_answer', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileQuestionSubmittedAnswer.prototype, "riskProfileQuestionPossibleAnswerId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => account_model_1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileQuestionSubmittedAnswer.prototype, "accountId", void 0);
RiskProfileQuestionSubmittedAnswer = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'risk_profile_question_submitted_answer' },
            plural: 'RiskProfileQuestionSubmittedAnswers',
            foreignKeys: {
                fkidx_risk_profile_ques_submtd_ans_ques_fk_id_ques: {
                    name: 'fkidx_risk_profile_ques_submtd_ans_ques_fk_id_ques',
                    foreignKey: 'fk_id_risk_profile_question',
                    entityKey: 'id',
                    entity: 'RiskProfileQuestion'
                },
                fkidx_risk_profile_ques_submtd_ans_ans_fk_id_ans: {
                    name: 'fkidx_risk_profile_ques_submtd_ans_ans_fk_id_ans',
                    foreignKey: 'fk_id_risk_profile_question_possible_answer',
                    entityKey: 'id',
                    entity: 'RiskProfileQuestionPossibleAnswer'
                },
                fkidx_risk_profile_ques_submtd_ans_account_fk_id_account: {
                    name: 'fkidx_risk_profile_ques_submtd_ans_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], RiskProfileQuestionSubmittedAnswer);
exports.RiskProfileQuestionSubmittedAnswer = RiskProfileQuestionSubmittedAnswer;
//# sourceMappingURL=risk-profile-question-submitted-answer.model.js.map