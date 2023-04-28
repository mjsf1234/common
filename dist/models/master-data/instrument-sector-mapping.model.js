"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentSectorMapping = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
const sector_classification_model_1 = require("./sector-classification.model");
const sector_model_1 = require("./sector.model");
let InstrumentSectorMapping = class InstrumentSectorMapping extends __1.BaseSQLModel {
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
], InstrumentSectorMapping.prototype, "percentage", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InstrumentSectorMapping.prototype, "bosCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentSectorMapping.prototype, "instrumentId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => sector_model_1.Sector, {
        name: 'sector',
        keyFrom: 'sectorId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_sector', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentSectorMapping.prototype, "sectorId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => sector_classification_model_1.SectorClassification, {
        name: 'sectorClassificaion',
        keyFrom: 'sectorClassificaionId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_sector_classification', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InstrumentSectorMapping.prototype, "sectorClassificationId", void 0);
InstrumentSectorMapping = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            indexes: {
                idx_is_active: { keys: { is_active: 1 }, options: { unique: false } },
                idx_created_date: { keys: { created_date: 1 }, options: { unique: false } },
                idx_last_modified_date: { keys: { last_modified_date: 1 }, options: { unique: false } },
                idx_instrument_sector_mapping_instrument_name: {
                    keys: { fk_id_instrument: 1, fk_id_sector: 1, fk_id_sector_classification: 1 },
                    options: { unique: false }
                }
            },
            postgresql: { tableName: 'instrument_sector_mapping' },
            plural: 'InstrumentSectorMappings',
            foreignKeys: {
                fkidx_instrument_sector_mapping_fk_id_instrument: {
                    name: 'fkidx_instrument_sector_mapping_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_instrument_sector_mapping_fk_id_sector: {
                    name: 'fkidx_instrument_sector_mapping_fk_id_sector',
                    foreignKey: 'fk_id_sector',
                    entityKey: 'id',
                    entity: 'Sector'
                },
                fkidx_instrument_sector_mapping_fk_id_sector_classification: {
                    name: 'fkidx_instrument_sector_mapping_fk_id_sector_classification',
                    foreignKey: 'fk_id_sector_classification',
                    entityKey: 'id',
                    entity: 'SectorClassification'
                }
            },
            hiddenProperties: []
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], InstrumentSectorMapping);
exports.InstrumentSectorMapping = InstrumentSectorMapping;
//# sourceMappingURL=instrument-sector-mapping.model.js.map