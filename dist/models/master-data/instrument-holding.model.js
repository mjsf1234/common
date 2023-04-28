"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentHolding = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
let InstrumentHolding = class InstrumentHolding extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 100,
        required: true,
        postgresql: { columnName: 'percentage', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentHolding.prototype, "percentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentHolding.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], InstrumentHolding.prototype, "effectiveDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'parentInstrument',
        keyFrom: 'parentInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_parent_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentHolding.prototype, "parentInstrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'childInstrument',
        keyFrom: 'childInstrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_child_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentHolding.prototype, "childInstrumentId", void 0);
InstrumentHolding = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_effective_date: { keys: { effective_date: -1 }, options: { unique: false } },
                idx_effective_date_active_fk_id_parent_instrument: {
                    keys: { effective_date: -1, is_active: 1, fk_id_parent_instrument: 1 },
                    options: { unique: false }
                }
            },
            postgresql: { tableName: 'instrument_holding' },
            plural: 'InstrumentHoldings',
            foreignKeys: {
                fkidx_instrument_holding_fk_id_parent_instrument: {
                    name: 'fkidx_instrument_holding_fk_id_parent_instrument',
                    foreignKey: 'fk_id_parent_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_instrument_holding_fk_id_child_instrument: {
                    name: 'fkidx_instrument_holding_fk_id_child_instrument',
                    foreignKey: 'fk_id_child_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InstrumentHolding);
exports.InstrumentHolding = InstrumentHolding;
//# sourceMappingURL=instrument-holding.model.js.map