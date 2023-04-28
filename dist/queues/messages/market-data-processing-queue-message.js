"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeConsumingMarketDataEvents = exports.MarketDataProcessingQueueMessage = exports.MarketDataProcessingQueueMessageEventType = void 0;
var MarketDataProcessingQueueMessageEventType;
(function (MarketDataProcessingQueueMessageEventType) {
    MarketDataProcessingQueueMessageEventType["INSTRUMENT_PRICES_FETCH"] = "INSTRUMENT_PRICES_FETCH";
    MarketDataProcessingQueueMessageEventType["INSTRUMENT_LEVEL_ATTRIBUTES_FETCH"] = "INSTRUMENT_LEVEL_ATTRIBUTES_FETCH";
    MarketDataProcessingQueueMessageEventType["INSTRUMENT_UNDERLYING_LEVEL_ATTRIBUTES_FETCH"] = "INSTRUMENT_UNDERLYING_LEVEL_ATTRIBUTES_FETCH";
    MarketDataProcessingQueueMessageEventType["MUTUAL_FUND_DETAILS_SYNC_CRON"] = "MUTUAL_FUND_DETAILS_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["SYSTEMATIC_METHOD_SETTING_SYNC_CRON"] = "SYSTEMATIC_METHOD_SETTING_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["MUTUAL_FUND_PRICES_SYNC_CRON"] = "MUTUAL_FUND_PRICES_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["INSTRUMENT_LAST_PRICE_SYNC_CRON"] = "INSTRUMENT_LAST_PRICE_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["NSE_INDEX_MASTER_SYNC_CRON"] = "NSE_INDEX_MASTER_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["NSE_INDEX_PRICE_SYNC_CRON"] = "NSE_INDEX_PRICE_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["BENCHMARK_RETURN_SYNC_CRON"] = "BENCHMARK_RETURN_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["MUTUAL_FUND_RAPM_SYNC_CRON"] = "MUTUAL_FUND_RAPM_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["MUTUAL_FUND_AUM_SYNC_CRON"] = "MUTUAL_FUND_AUM_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["MUTUAL_FUND_MARKET_CAP_SYNC_CRON"] = "MUTUAL_FUND_MARKET_CAP_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["MUTUAL_FUND_RETURN_SYNC_CRON"] = "MUTUAL_FUND_RETURN_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["MUTUAL_FUND_SENSITIVITY_SYNC_CRON"] = "MUTUAL_FUND_SENSITIVITY_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["MUTUAL_FUND_HOLDING_SYNC_CRON"] = "MUTUAL_FUND_HOLDING_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["INDEX_MASTER_SYNC_CRON"] = "INDEX_MASTER_SYNC_CRON";
    MarketDataProcessingQueueMessageEventType["SCHEME_BENCHMARK_SYNC_CRON"] = "SCHEME_BENCHMARK_SYNC_CRON";
})(MarketDataProcessingQueueMessageEventType = exports.MarketDataProcessingQueueMessageEventType || (exports.MarketDataProcessingQueueMessageEventType = {}));
class MarketDataProcessingQueueMessage {
}
exports.MarketDataProcessingQueueMessage = MarketDataProcessingQueueMessage;
exports.timeConsumingMarketDataEvents = [
    'MUTUAL_FUND_PRICES_SYNC_CRON',
    'INSTRUMENT_LAST_PRICE_SYNC_CRON',
    'NSE_INDEX_MASTER_SYNC_CRON',
    'NSE_INDEX_PRICE_SYNC_CRON'
];
//# sourceMappingURL=market-data-processing-queue-message.js.map