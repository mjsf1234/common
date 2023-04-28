"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReverseFeed = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const __1 = require("..");
let ReverseFeed = class ReverseFeed extends __1.BaseSQLModel {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ReverseFeed.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'remarks', dataType: 'TEXT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ReverseFeed.prototype, "remarks", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        default: 1,
        optionLabelIdentifier: 'REVERSEFEEDSTATUS',
        postgresql: { columnName: 'status', dataType: 'SMALLINT', nullable: 'N' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReverseFeed.prototype, "status", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        postgresql: { columnName: 'batch_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ReverseFeed.prototype, "batchCode", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.Rta, {
        name: 'rta',
        keyFrom: 'rtaId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReverseFeed.prototype, "rtaId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'uploadedByAppUser',
        keyFrom: 'uploadedByAppUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_uploaded_by_user', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReverseFeed.prototype, "uploadedByAppUserId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionAppFile, {
        name: 'transactionAppFile',
        keyFrom: 'transactionAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReverseFeed.prototype, "transactionAppFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.TransactionAppFile, {
        name: 'transactionAppFile',
        keyFrom: 'transactionAppFileId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_reconciliation_file_id', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReverseFeed.prototype, "reverseFeedReconciliationFileId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => __1.AppUser, {
        name: 'deletedByAppUser',
        keyFrom: 'deletedByAppUserId',
        keyTo: 'id'
    }, {
        postgresql: { columnName: 'fk_id_user_deleted_by', dataType: 'INT', nullable: 'Y' }
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], ReverseFeed.prototype, "deletedByAppUserId", void 0);
ReverseFeed = (0, tslib_1.__decorate)([
    (0, repository_1.model)({
        settings: {
            strict: false,
            postgresql: { tableName: 'reverse_feed' },
            plural: 'ReverseFeeds',
            foreignKeys: {
                fkidx_reverse_feed_rta_fk_id_rta: {
                    name: 'fkidx_reverse_feed_rta_fk_id_rta',
                    foreignKey: 'fk_id_rta',
                    entityKey: 'id',
                    entity: 'RTA'
                },
                fkidx_reverse_feed_user_fk_id_uploaded_by_user: {
                    name: 'fkidx_reverse_feed_user_fk_id_uploaded_by_user',
                    foreignKey: 'fk_id_uploaded_by_user',
                    entityKey: 'id',
                    entity: 'AppUser'
                },
                fkidx_reverse_feed_file_fk_id_file: {
                    name: 'fkidx_reverse_feed_file_fk_id_file',
                    foreignKey: 'fk_id_file',
                    entityKey: 'id',
                    entity: 'AppFile'
                },
                fkidx_reverse_feed_app_user_fk_id_user_deleted_by: {
                    name: 'fkidx_reverse_feed_app_user_fk_id_user_deleted_by',
                    foreignKey: 'fk_id_user_deleted_by',
                    entityKey: 'id',
                    entity: 'AppUser'
                }
            },
            hiddenProperties: ['fk_id_rta', 'fk_id_uploaded_by_user', 'fk_id_file', 'fk_id_user_deleted_by']
        }
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], ReverseFeed);
exports.ReverseFeed = ReverseFeed;
//# sourceMappingURL=reverse-feed.model.js.map