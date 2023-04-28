"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiskProfileQuestionPossibleAnswer = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const risk_profile_question_model_1 = require("./risk-profile-question.model");
let RiskProfileQuestionPossibleAnswer = class RiskProfileQuestionPossibleAnswer extends __1.BaseSQLModel {
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
], RiskProfileQuestionPossibleAnswer.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'answer', dataType: 'TEXT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfileQuestionPossibleAnswer.prototype, "answer", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfileQuestionPossibleAnswer.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'score', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 },
        jsonSchema: {
            minimum: 0,
            maximum: 100
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileQuestionPossibleAnswer.prototype, "score", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], RiskProfileQuestionPossibleAnswer.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => risk_profile_question_model_1.RiskProfileQuestion, {
        name: 'riskProfileQuestion',
        keyFrom: 'riskProfileQuestionId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_risk_profile_question', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], RiskProfileQuestionPossibleAnswer.prototype, "riskProfileQuestionId", void 0);
RiskProfileQuestionPossibleAnswer = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'risk_profile_question_possible_answer' },
            plural: 'RiskProfileQuestionPossibleAnswers',
            foreignKeys: {
                fkidx_risk_profile_ques_poss_ans_ques_fk_id_ques: {
                    name: 'fkidx_risk_profile_ques_poss_ans_ques_fk_id_ques',
                    foreignKey: 'fk_id_risk_profile_question',
                    entityKey: 'id',
                    entity: 'RiskProfileQuestion'
                }
            },
            forceId: false,
            hiddenProperties: ['fk_id_risk_profile_question'],
            indexes: {
                idx_risk_profile_answer: { keys: { answer: 1 }, options: { unique: true, caseInsensitiveUnique: true } }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], RiskProfileQuestionPossibleAnswer);
exports.RiskProfileQuestionPossibleAnswer = RiskProfileQuestionPossibleAnswer;
//# sourceMappingURL=risk-profile-question-possible-answer.model.js.map