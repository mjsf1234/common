"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentRatingMapping = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
const rating_classification_model_1 = require("./rating-classification.model");
const rating_model_1 = require("./rating.model");
let InstrumentRatingMapping = class InstrumentRatingMapping extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        default: 100,
        required: true,
        postgresql: { columnName: 'percentage', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10 }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentRatingMapping.prototype, "percentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentRatingMapping.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => rating_model_1.Rating, {
        name: 'rating',
        keyFrom: 'ratingId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rating', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentRatingMapping.prototype, "ratingId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => rating_classification_model_1.RatingClassification, {
        name: 'ratingClassificarion',
        keyFrom: 'ratingClassificarionId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rating_classification', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentRatingMapping.prototype, "ratingClassificarionId", void 0);
InstrumentRatingMapping = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_instrument_rating_mapping_instrument_name: {
                    keys: { fk_id_instrument: 1, fk_id_rating_classification: 1 },
                    options: { unique: true, caseInsensitiveUnique: true }
                }
            },
            postgresql: { tableName: 'instrument_rating_mapping' },
            plural: 'InstrumentRatingMappings',
            foreignKeys: {
                fkidx_instrument_rating_mapping_fk_id_instrument: {
                    name: 'fkidx_instrument_rating_mapping_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_instrument_rating_mapping_fk_id_rating: {
                    name: 'fkidx_instrument_rating_mapping_fk_id_rating',
                    foreignKey: 'fk_id_rating',
                    entityKey: 'id',
                    entity: 'Rating'
                },
                fkidx_instrument_rating_mapping_fk_id_rating_classification: {
                    name: 'fkidx_instrument_rating_mapping_fk_id_rating_classification',
                    foreignKey: 'fk_id_rating_classification',
                    entityKey: 'id',
                    entity: 'RatingClassification'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InstrumentRatingMapping);
exports.InstrumentRatingMapping = InstrumentRatingMapping;
//# sourceMappingURL=instrument-rating-mapping.model.js.map