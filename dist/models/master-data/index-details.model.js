"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexDetails = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
const instrument_model_1 = require("./instrument.model");
let IndexDetails = class IndexDetails extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => instrument_model_1.Instrument, {
        name: 'instrument',
        keyFrom: 'instrumentId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], IndexDetails.prototype, "instrumentId", void 0);
IndexDetails = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'index_details' },
            plural: 'IndexDetails',
            foreignKeys: {
                fkidx_index_details_instrument_fk_id_instrument: {
                    name: 'fkidx_index_details_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                }
            },
            hiddenProperties: ['fk_id_instrument']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], IndexDetails);
exports.IndexDetails = IndexDetails;
//# sourceMappingURL=index-details.model.js.map