"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncTransactionalDataRefresherMixin = void 0;
const tslib_1 = require("tslib");
const lodash_1 = (0, tslib_1.__importStar)(require("lodash"));
const queues_1 = require("../queues");
class SyncTransactionalDataRefresherMixin {
    static async sendMessage(ctx, recordId) {
        const shouldRefresh = lodash_1.default.get(ctx, 'Model.settings.syncRefresher', false);
        const eventType = lodash_1.default.get(ctx, 'Model.settings.syncRefresher.eventType', false);
        if (shouldRefresh && eventType) {
            // Call TransactionData Refresher
            const dataToSend = {};
            lodash_1.default.each(lodash_1.default.get(ctx, 'Model.settings.syncRefresher.params'), (value, key) => {
                if (value != 'type') {
                    let type = lodash_1.default.get(ctx, 'Model.settings.syncRefresher.params.type');
                    if (type == 'Array') {
                        dataToSend[key] = [lodash_1.default.get(ctx, `data.${value}`, lodash_1.default.get(ctx, `instance.${value}`))];
                    }
                    else {
                        dataToSend[key] = lodash_1.default.get(ctx, `data.${value}`, lodash_1.default.get(ctx, `instance.${value}`));
                    }
                    if (value === 'id' && recordId) {
                        if (type == 'Array') {
                            if ((0, lodash_1.isArray)(recordId)) {
                                dataToSend[key] = recordId;
                            }
                            else {
                                dataToSend[key] = [recordId];
                            }
                        }
                        else {
                            dataToSend[key] = recordId;
                        }
                    }
                }
            });
            lodash_1.default.each(lodash_1.default.get(ctx, 'Model.settings.syncRefresher.defaultValues'), (value, key) => {
                if (key != 'type')
                    dataToSend[key] = value;
            });
            queues_1.QueueProducer.sendMessageInTransactionalDataRefreshingQueue({
                eventType,
                ...dataToSend
            });
        }
    }
    static async register(modelClass) {
        modelClass.observe('after save', async (ctx) => {
            const { options } = ctx;
            const { logParams } = options;
            if (logParams && logParams.doAuditLog === true) {
                const recordId = lodash_1.default.get(ctx, 'where.id');
                await this.sendMessage(ctx, recordId);
            }
        });
    }
}
exports.SyncTransactionalDataRefresherMixin = SyncTransactionalDataRefresherMixin;
//# sourceMappingURL=sync-transactional-data-refresher.mixin.js.map