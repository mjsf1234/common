"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DailyInstrumentPriceSnapshot = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
const queues_1 = require("../../queues");
const moment_timezone_1 = (0, tslib_1.__importDefault)(require("moment-timezone"));
let DailyInstrumentPriceSnapshot = class DailyInstrumentPriceSnapshot extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        postgresql: { columnName: 'price_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], DailyInstrumentPriceSnapshot.prototype, "priceDate", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'return', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "return", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'open_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "openPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'high_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "highPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'low_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "lowPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'close_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "closePrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        postgresql: { columnName: 'price', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'adjusted_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "adjustedPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'movement_from_previous_price', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "movementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: {
            columnName: 'percentage_movement_from_previous_price',
            dataType: 'NUMERIC',
            nullable: 'Y',
            dataPrecision: 25,
            dataScale: 10
        }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "percentageMovementFromPreviousPrice", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], DailyInstrumentPriceSnapshot.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'source', dataType: 'SMALLINT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "source", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'accrued_interest', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "accruedInterest", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DailyInstrumentPriceSnapshot.prototype, "instrumentId", void 0);
DailyInstrumentPriceSnapshot = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_price_date: {
                    keys: { price_date: 1, fk_id_instrument: 1, source: 1 },
                    options: { unique: false }
                }
            },
            postgresql: { tableName: 'daily_instrument_price_snapshot' },
            plural: 'DailyInstrumentPriceSnapshots',
            foreignKeys: {
                fkidx_dips_instrument_fk_id_instrument: {
                    name: 'fkidx_dips_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: ['fk_id_instrument'],
            syncRefresher: {
                eventType: queues_1.TransactionalDataRefreshingQueueMessageEventType.INSTRUMENT_PRICES_REPLICATION_BY_LAST_MODIFIED_DATE,
                defaultValues: {
                    lastModifiedDate: (0, moment_timezone_1.default)().startOf('day').format('YYYY-MM-DD')
                }
            }
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], DailyInstrumentPriceSnapshot);
exports.DailyInstrumentPriceSnapshot = DailyInstrumentPriceSnapshot;
//# sourceMappingURL=daily-instrument-price-snapshot.model.js.map