"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EquityDetailsHistory = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
let EquityDetailsHistory = class EquityDetailsHistory extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'market_capitalization', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 30, dataScale: 3 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EquityDetailsHistory.prototype, "marketCapitalization", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        postgresql: { columnName: 'market_capitalization_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], EquityDetailsHistory.prototype, "marketCapitalizationDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'paid_up_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EquityDetailsHistory.prototype, "paidUpValue", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'risk_rating', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EquityDetailsHistory.prototype, "riskRating", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], EquityDetailsHistory.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], EquityDetailsHistory.prototype, "instrumentId", void 0);
EquityDetailsHistory = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_market_capitalization_date: { keys: { market_capitalization_date: -1 }, options: { unique: false } },
                idx_market_capitalization_date_fk_id_instrument: {
                    keys: { market_capitalization_date: -1, is_active: 1, fk_id_instrument: 1 },
                    options: { unique: false }
                }
            },
            postgresql: { tableName: 'equity_details_history' },
            plural: 'EquityDetailsHistory',
            foreignKeys: {
                fkidx_equity_details_history_instrument_fk_id_instrument: {
                    name: 'fkidx_equity_details_history_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: ['fk_id_instrument']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], EquityDetailsHistory);
exports.EquityDetailsHistory = EquityDetailsHistory;
//# sourceMappingURL=equity-details-history.model.js.map