"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KarvyAnnexureFeed = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let KarvyAnnexureFeed = class KarvyAnnexureFeed extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'batch_number', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], KarvyAnnexureFeed.prototype, "batchNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        postgresql: { columnName: 'batch_sequence_number', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], KarvyAnnexureFeed.prototype, "batchSequenceNumber", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Account, {
        name: 'account',
        keyFrom: 'accountId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], KarvyAnnexureFeed.prototype, "accountId", void 0);
KarvyAnnexureFeed = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            indexes: {},
            postgresql: { tableName: 'karvy_annexure_feed' },
            plural: 'KarvyAnnexureFeeds',
            foreignKeys: {
                fkidx_karvy_annexure_feed_instrument_fk_id_instrument: {
                    name: 'fkidx_karvy_annexure_feed_instrument_fk_id_instrument',
                    foreignKey: 'fk_id_instrument',
                    entityKey: 'id',
                    entity: 'Instrument'
                },
                fkidx_karvy_annexure_feed_spa_fk_id_spa: {
                    name: 'fkidx_karvy_annexure_feed_spa_fk_id_spa',
                    foreignKey: 'fk_id_service_provider_account',
                    entityKey: 'id',
                    entity: 'ServiceProviderAccount'
                },
                fkidx_karvy_annexure_feed_account_fk_id_account: {
                    name: 'fkidx_karvy_annexure_feed_account_fk_id_account',
                    foreignKey: 'fk_id_account',
                    entityKey: 'id',
                    entity: 'Account'
                }
            },
            hiddenProperties: ['fk_id_instrument', 'fk_id_service_provider_account']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], KarvyAnnexureFeed);
exports.KarvyAnnexureFeed = KarvyAnnexureFeed;
//# sourceMappingURL=karvy-annexure-feed.model.js.map