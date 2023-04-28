"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediumPriorityTransactionalDataEvents = exports.lowPriorityTransactionalDataEvents = exports.TransactionalDataRefreshingQueueMessage = exports.TransactionalDataRefreshingQueueMessageEventType = void 0;
var TransactionalDataRefreshingQueueMessageEventType;
(function (TransactionalDataRefreshingQueueMessageEventType) {
    TransactionalDataRefreshingQueueMessageEventType["DATA_REFRESH_BY_ACCOUNT_ID"] = "DATA_REFRESH_BY_ACCOUNT_ID";
    TransactionalDataRefreshingQueueMessageEventType["DATA_REFRESH_BY_SERVICEPROVIDERACCOUNT_ID"] = "DATA_REFRESH_BY_SERVICEPROVIDERACCOUNT_ID";
    TransactionalDataRefreshingQueueMessageEventType["FULL_REFRESH_AT_SERVICEPROVIDERACCOUNT_LEVEL"] = "FULL_REFRESH_AT_SERVICEPROVIDERACCOUNT_LEVEL";
    TransactionalDataRefreshingQueueMessageEventType["TRANSACTION_REPLICATION_BY_LAST_MODIFIED_DATE"] = "TRANSACTION_REPLICATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["HOLDING_REPLICATION_BY_LAST_MODIFIED_DATE"] = "HOLDING_REPLICATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["HISTORICAL_HOLDING_REPLICATION_BY_LAST_MODIFIED_DATE"] = "HISTORICAL_HOLDING_REPLICATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["GAIN_REPLICATION_BY_LAST_MODIFIED_DATE"] = "GAIN_REPLICATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["SYSTEMATIC_METHOD_REPLICATION_BY_LAST_MODIFIED_DATE"] = "SYSTEMATIC_METHOD_REPLICATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["ORDER_ITEM_REPLICATION_BY_LAST_MODIFIED_DATE"] = "ORDER_ITEM_REPLICATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["ORDER_ITEM_REPLICATION_BY_ORDER_ID"] = "ORDER_ITEM_REPLICATION_BY_ORDER_ID";
    TransactionalDataRefreshingQueueMessageEventType["ORDER_ITEM_REPLICATION_BY_ORDER_ITEM_IDS"] = "ORDER_ITEM_REPLICATION_BY_ORDER_ITEM_IDS";
    TransactionalDataRefreshingQueueMessageEventType["ORDER_ITEM_REPLICATION_BY_ACCOUNT_ID"] = "ORDER_ITEM_REPLICATION_BY_ACCOUNT_ID";
    TransactionalDataRefreshingQueueMessageEventType["INSTRUMENT_REPLICATION_BY_LAST_MODIFIED_DATE"] = "INSTRUMENT_REPLICATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["INSTRUMENT_PRICES_REPLICATION_BY_LAST_MODIFIED_DATE"] = "INSTRUMENT_PRICES_REPLICATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["INSTRUMENT_REPLICATION_BY_INSTRUMENT_ID"] = "INSTRUMENT_REPLICATION_BY_INSTRUMENT_ID";
    TransactionalDataRefreshingQueueMessageEventType["INSTRUMENT_REPLICATION_BY_WHERE_FILTER"] = "INSTRUMENT_REPLICATION_BY_WHERE_FILTER";
    TransactionalDataRefreshingQueueMessageEventType["INSTRUMENT_PRICES_REPLICATION_BY_INSTRUMENT_ID"] = "INSTRUMENT_PRICES_REPLICATION_BY_INSTRUMENT_ID";
    TransactionalDataRefreshingQueueMessageEventType["HOLDING_UPDATION_BY_INSTRUMENT_ID"] = "HOLDING_UPDATION_BY_INSTRUMENT_ID";
    TransactionalDataRefreshingQueueMessageEventType["HOLDING_UPDATION_BY_LAST_MODIFIED_DATE"] = "HOLDING_UPDATION_BY_LAST_MODIFIED_DATE";
    TransactionalDataRefreshingQueueMessageEventType["DATA_REFRESH_BY_ACCOUNT_ID_FOR_CAS"] = "DATA_REFRESH_BY_ACCOUNT_ID_FOR_CAS";
    TransactionalDataRefreshingQueueMessageEventType["FATCA_FILE_GENERATION_BY_ACCOUNT_ID"] = "FATCA_FILE_GENERATION_BY_ACCOUNT_ID";
    TransactionalDataRefreshingQueueMessageEventType["SYSTEMATIC_METHOD_REPLICATION_BY_SYSTEMATIC_METHOD_ID"] = "SYSTEMATIC_METHOD_REPLICATION_BY_SYSTEMATIC_METHOD_ID";
    TransactionalDataRefreshingQueueMessageEventType["DATA_REFRESH_BY_ACCOUNT_ID_FOR_GOAL"] = "DATA_REFRESH_BY_ACCOUNT_ID_FOR_GOAL";
    //Events for CRON Processing
    TransactionalDataRefreshingQueueMessageEventType["INSTRUMENT_REPLICATION_CRON"] = "INSTRUMENT_REPLICATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["INSTRUMENT_PRICES_REPLICATION_CRON"] = "INSTRUMENT_PRICES_REPLICATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["SYSTEMATIC_METHOD_REPLICATION_CRON"] = "SYSTEMATIC_METHOD_REPLICATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["ORDER_ITEM_REPLICATION_CRON"] = "ORDER_ITEM_REPLICATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["TRANSACTION_REPLICATION_CRON"] = "TRANSACTION_REPLICATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["HOLDING_CALCULATOR_CRON"] = "HOLDING_CALCULATOR_CRON";
    TransactionalDataRefreshingQueueMessageEventType["HOLDING_REPLICATION_CRON"] = "HOLDING_REPLICATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["HOLDING_DATA_REFRESHER_CRON"] = "HOLDING_DATA_REFRESHER_CRON";
    TransactionalDataRefreshingQueueMessageEventType["GAIN_CALCULATOR_CRON"] = "GAIN_CALCULATOR_CRON";
    TransactionalDataRefreshingQueueMessageEventType["GAIN_REPLICATION_CRON"] = "GAIN_REPLICATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["FATCA_FILE_GENERATION_CRON"] = "FATCA_FILE_GENERATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["RTA_HOLDING_RECONCILIATION"] = "RTA_HOLDING_RECONCILIATION";
    TransactionalDataRefreshingQueueMessageEventType["DEPOSIT_HOLDING_CALCULATION_CRON"] = "DEPOSIT_HOLDING_CALCULATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["BALANCE_SHEET_REPLICATION_CRON"] = "BALANCE_SHEET_REPLICATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["DOCUMENT_GENERATOR_CRON"] = "DOCUMENT_GENERATOR_CRON";
    TransactionalDataRefreshingQueueMessageEventType["NOMINEE_DOCUMENT_GENERATION_CRON"] = "NOMINEE_DOCUMENT_GENERATION_CRON";
    TransactionalDataRefreshingQueueMessageEventType["EXPORT_INSTRUMENTS"] = "EXPORT_INSTRUMENTS";
    TransactionalDataRefreshingQueueMessageEventType["ENGINE_REQUEST_FROM_SERVICE"] = "ENGINE_REQUEST_FROM_SERVICE";
    TransactionalDataRefreshingQueueMessageEventType["HANDLE_MATURE_DEPOSIT_CRON"] = "HANDLE_MATURE_DEPOSIT_CRON";
})(TransactionalDataRefreshingQueueMessageEventType = exports.TransactionalDataRefreshingQueueMessageEventType || (exports.TransactionalDataRefreshingQueueMessageEventType = {}));
class TransactionalDataRefreshingQueueMessage {
}
exports.TransactionalDataRefreshingQueueMessage = TransactionalDataRefreshingQueueMessage;
exports.lowPriorityTransactionalDataEvents = [
    'INSTRUMENT_REPLICATION_BY_LAST_MODIFIED_DATE',
    'INSTRUMENT_PRICES_REPLICATION_BY_LAST_MODIFIED_DATE',
    'INSTRUMENT_REPLICATION_CRON',
    'INSTRUMENT_PRICES_REPLICATION_CRON',
    'INSTRUMENT_REPLICATION_CRON',
    'INSTRUMENT_PRICES_REPLICATION_CRON',
    'SYSTEMATIC_METHOD_REPLICATION_CRON',
    'ORDER_ITEM_REPLICATION_CRON',
    'TRANSACTION_REPLICATION_CRON',
    'HOLDING_CALCULATOR_CRON',
    'HOLDING_REPLICATION_CRON',
    'HOLDING_DATA_REFRESHER_CRON',
    'GAIN_CALCULATOR_CRON',
    'GAIN_REPLICATION_CRON',
    'FATCA_FILE_GENERATION_CRON',
    'NOMINEE_DOCUMENT_GENERATION_CRON',
    'RTA_HOLDING_RECONCILIATION'
];
exports.mediumPriorityTransactionalDataEvents = [
    'HISTORICAL_HOLDING_REPLICATION_BY_LAST_MODIFIED_DATE',
    'GAIN_REPLICATION_BY_LAST_MODIFIED_DATE',
    'ORDER_ITEM_REPLICATION_BY_LAST_MODIFIED_DATE',
    'HOLDING_UPDATION_BY_INSTRUMENT_ID',
    'HOLDING_UPDATION_BY_LAST_MODIFIED_DATE',
    'BALANCE_SHEET_REPLICATION_CRON',
    'DOCUMENT_GENERATOR_CRON',
    'EXPORT_INSTRUMENTS',
    'HANDLE_MATURE_DEPOSIT_CRON'
];
//# sourceMappingURL=transactional-data-refreshing-queue-message.js.map