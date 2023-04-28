"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BondDetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
let BondDetails = class BondDetails extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'frequency', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BondDetails.prototype, "frequency", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'gsec_code', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BondDetails.prototype, "gsecCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'securities', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BondDetails.prototype, "securities", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'type', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255 }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], BondDetails.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'coupon', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BondDetails.prototype, "coupon", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'face_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BondDetails.prototype, "faceValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'issue_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BondDetails.prototype, "issueDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'maturity_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BondDetails.prototype, "maturityDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'put_call_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], BondDetails.prototype, "putCallDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'paid_up_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BondDetails.prototype, "paidUpValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], BondDetails.prototype, "instrumentId", void 0);
BondDetails = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } }
            },
            postgresql: { tableName: 'bond_details' },
            plural: 'BondDetails',
            foreignKeys: {
                fkidx_bond_details_instrument_fk_id_instrument: {
                    name: 'fkidx_bond_details_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: ['fk_id_instrument']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], BondDetails);
exports.BondDetails = BondDetails;
//# sourceMappingURL=bond-details.model.js.map