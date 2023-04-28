"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfileQuestion = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const risk_profile_question_possible_answer_model_1 = require("./risk-profile-question-possible-answer.model");
let RiskProfileQuestion = class RiskProfileQuestion extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
        id: true,
        postgresql: { columnName: 'id', type: 'number', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileQuestion.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'question', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfileQuestion.prototype, "question", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'RISKPROFILEQUESTIONTYPE',
        postgresql: { columnName: 'type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileQuestion.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfileQuestion.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => risk_profile_question_possible_answer_model_1.RiskProfileQuestionPossibleAnswer, { keyTo: 'riskProfileQuestionId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], RiskProfileQuestion.prototype, "possibleAnswers", void 0);
RiskProfileQuestion = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'risk_profile_question' },
            plural: 'RiskProfileQuestions',
            foreignKeys: {},
            hiddenProperties: [],
            forceId: false,
            indexes: {
                idx_risk_profile_question: { keys: { question: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], RiskProfileQuestion);
exports.RiskProfileQuestion = RiskProfileQuestion;
//# sourceMappingURL=risk-profile-question.model.js.map