"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goal = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const transaction_1 = require("../transaction");
let Goal = class Goal extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Goal.prototype, "uniqueId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Goal.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        optionLabelIdentifier: 'GOALTYPE',
        postgresql: { columnName: 'type', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Goal.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'description', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Goal.prototype, "description", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Goal.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], Goal.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'target_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Goal.prototype, "targetAmount", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'expected_corpus', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Goal.prototype, "expectedCorpus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'object',
        default: {},
        postgresql: { columnName: 'config', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Object)
], Goal.prototype, "config", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.GoalCategory, {
        name: 'goalCategory',
        keyFrom: 'goalCategoryId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_goal_category', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Goal.prototype, "goalCategoryId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Goal.prototype, "accountId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => transaction_1.Holding, { keyTo: 'goalId' }),
    (0, tslib_1.__metadata)("design:type", Array)
], Goal.prototype, "holdings", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => transaction_1.RebalancingCheck, { keyTo: 'goalId' }),
    (0, tslib_1.__metadata)("design:type", transaction_1.RebalancingCheck)
], Goal.prototype, "rebalancingCheck", void 0);
Goal = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'goal' },
            plural: 'Goals',
            foreignKeys: {
                fkidx_goal_account_fk_id_account: {
                    name: 'fkidx_goal_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                }
            },
            hiddenProperties: ['fk_id_account']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Goal);
exports.Goal = Goal;
//# sourceMappingURL=goal.model.js.map