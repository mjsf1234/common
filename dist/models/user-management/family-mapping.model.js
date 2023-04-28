"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyMapping = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const app_user_model_1 = require("./app-user.model");
let FamilyMapping = class FamilyMapping extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: false,
        isPseudonym: true,
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], FamilyMapping.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'FAMILYREQUESTSTATUS',
        postgresql: { columnName: 'family_request_status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FamilyMapping.prototype, "familyRequestStatus", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'number_of_rejects', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FamilyMapping.prototype, "numberOfRejects", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'last_reject_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], FamilyMapping.prototype, "lastRejectDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'new_request_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], FamilyMapping.prototype, "newRequestDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => app_user_model_1.AppUser, {
        name: 'parentAppUser',
        keyFrom: 'parentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_parent', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FamilyMapping.prototype, "parentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => app_user_model_1.AppUser, {
        name: 'childAppUser',
        keyFrom: 'childId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_child', dataType: 'INT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], FamilyMapping.prototype, "childId", void 0);
FamilyMapping = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'family_mapping' },
            plural: 'FamilyMappings',
            foreignKeys: {
            // @TODO
            /*fkidx_family_mapping_user_fk_id_user_parent: {
              name: 'fkidx_family_mapping_user_fk_id_user_parent',
              foreignKey: 'fk_id_user_parent',
              entityKey: 'id',
              entity: 'AppUser'
            },
            fkidx_family_mapping_user_fk_id_user_child: {
              name: 'fkidx_family_mapping_user_fk_id_user_child',
              foreignKey: 'fk_id_user_child',
              entityKey: 'id',
              entity: 'AppUser'
            },      */
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], FamilyMapping);
exports.FamilyMapping = FamilyMapping;
//# sourceMappingURL=family-mapping.model.js.map