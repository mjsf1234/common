"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCronFacade = exports.CRON_JOB_ENUM = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const queues_1 = require("../../../queues");
const utils_1 = require("../../../utils");
// All business loigc goes inside Facade layer
var CRON_JOB_ENUM;
(function (CRON_JOB_ENUM) {
    //Order execution Processor
    CRON_JOB_ENUM["forward_feed"] = "forward_feed";
    CRON_JOB_ENUM["systematic_generator"] = "systematic_generator";
    CRON_JOB_ENUM["payment_reconcilation"] = "payment_reconcilation";
    CRON_JOB_ENUM["payment_reconcilation_final_cron"] = "payment_reconcilation_final_cron";
    CRON_JOB_ENUM["debit_sip_transaction"] = "debit_sip_transaction";
    CRON_JOB_ENUM["disable_unclassified_goals"] = "disable_unclassified_goals";
    CRON_JOB_ENUM["payment_reconcilation_sip"] = "payment_reconcilation_sip";
    CRON_JOB_ENUM["payment_reconcilation_sip_final_cron"] = "payment_reconcilation_sip_final_cron";
    //Market Data Sync processor
    CRON_JOB_ENUM["instrument_and_mutual_fund_details_sync"] = "instrument_and_mutual_fund_details_sync";
    CRON_JOB_ENUM["systematic_method_settings_sync"] = "systematic_method_settings_sync";
    CRON_JOB_ENUM["mutual_fund_price_sync"] = "mutual_fund_price_sync";
    CRON_JOB_ENUM["instrument_last_price_sync"] = "instrument_last_price_sync";
    CRON_JOB_ENUM["nse_index_master_sync"] = "nse_index_master_sync";
    CRON_JOB_ENUM["nse_index_price_sync"] = "nse_index_price_sync";
    CRON_JOB_ENUM["benchmark_return_sync"] = "benchmark_return_sync";
    CRON_JOB_ENUM["mutual_fund_rapm_sync"] = "mutual_fund_rapm_sync";
    CRON_JOB_ENUM["mutual_fund_aum_sync"] = "mutual_fund_aum_sync";
    CRON_JOB_ENUM["mutual_fund_market_cap_sync"] = "mutual_fund_market_cap_sync";
    CRON_JOB_ENUM["mutual_fund_return_sync"] = "mutual_fund_return_sync";
    CRON_JOB_ENUM["mutual_fund_sensitivity_sync"] = "mutual_fund_sensitivity_sync";
    CRON_JOB_ENUM["mutual_fund_holding_sync"] = "mutual_fund_holding_sync";
    CRON_JOB_ENUM["index_master_sync"] = "index_master_sync";
    CRON_JOB_ENUM["scheme_benchmark_sync"] = "scheme_benchmark_sync";
    // Transcational data referesher processor
    CRON_JOB_ENUM["instrument_reporting_replicator"] = "instrument_reporting_replicator";
    CRON_JOB_ENUM["instrument_price_reporting"] = "instrument_price_reporting";
    CRON_JOB_ENUM["systematic_method_replicator"] = "systematic_method_replicator";
    CRON_JOB_ENUM["order_item_replicator"] = "order_item_replicator";
    CRON_JOB_ENUM["transaction_replicator"] = "transaction_replicator";
    CRON_JOB_ENUM["holding_calculator"] = "holding_calculator";
    CRON_JOB_ENUM["deposit_holding_calculation"] = "deposit_holding_calculation";
    CRON_JOB_ENUM["holding_replicator"] = "holding_replicator";
    CRON_JOB_ENUM["holding_data_refresher"] = "holding_data_refresher";
    CRON_JOB_ENUM["gain_calculator"] = "gain_calculator";
    CRON_JOB_ENUM["gain_replicator"] = "gain_replicator";
    CRON_JOB_ENUM["fatca_generation"] = "fatca_generation";
    CRON_JOB_ENUM["balance_sheet_replicator"] = "balance_sheet_replicator";
    CRON_JOB_ENUM["document_generator"] = "document_generator";
    CRON_JOB_ENUM["nominee_document_generation"] = "nominee_document_generation";
    CRON_JOB_ENUM["handle_mature_deposit_cron"] = "handle_mature_deposit_cron";
    // Data health check cron
    CRON_JOB_ENUM["dormant_users_check"] = "dormant_users_check";
    CRON_JOB_ENUM["goal_delete_cron"] = "goal_delete_cron";
    CRON_JOB_ENUM["payment_reversal"] = "payment_reversal";
    CRON_JOB_ENUM["export_uam_reports"] = "export_uam_reports";
    CRON_JOB_ENUM["validate_pan_aadhar_link"] = "validate_pan_aadhar_link";
})(CRON_JOB_ENUM = exports.CRON_JOB_ENUM || (exports.CRON_JOB_ENUM = {}));
const API_KEY = process.env.GCP_CRON_API_KEY;
let BaseCronFacade = class BaseCronFacade {
    constructor() { }
    async processBody(body, headers) {
        utils_1.LoggingUtils.info('Invoke processBody');
        if (headers['cron-api-key'] == API_KEY) {
            utils_1.LoggingUtils.info('API key is valid');
            let result;
            switch (body.cronJobName) {
                case CRON_JOB_ENUM.instrument_reporting_replicator:
                case CRON_JOB_ENUM.instrument_price_reporting:
                case CRON_JOB_ENUM.systematic_method_replicator:
                case CRON_JOB_ENUM.order_item_replicator:
                case CRON_JOB_ENUM.transaction_replicator:
                case CRON_JOB_ENUM.holding_calculator:
                case CRON_JOB_ENUM.deposit_holding_calculation:
                case CRON_JOB_ENUM.holding_replicator:
                case CRON_JOB_ENUM.holding_data_refresher:
                case CRON_JOB_ENUM.gain_calculator:
                case CRON_JOB_ENUM.gain_replicator:
                case CRON_JOB_ENUM.fatca_generation:
                case CRON_JOB_ENUM.balance_sheet_replicator:
                case CRON_JOB_ENUM.document_generator:
                case CRON_JOB_ENUM.nominee_document_generation:
                case CRON_JOB_ENUM.handle_mature_deposit_cron:
                    utils_1.LoggingUtils.info('Transcational data referesher processor');
                    result = await this.transcationalDataReferesherProcessor(body);
                    break;
                case CRON_JOB_ENUM.forward_feed:
                case CRON_JOB_ENUM.systematic_generator:
                case CRON_JOB_ENUM.payment_reconcilation:
                case CRON_JOB_ENUM.payment_reconcilation_final_cron:
                case CRON_JOB_ENUM.payment_reconcilation_sip:
                case CRON_JOB_ENUM.payment_reconcilation_sip_final_cron:
                case CRON_JOB_ENUM.debit_sip_transaction:
                case CRON_JOB_ENUM.validate_pan_aadhar_link:
                    utils_1.LoggingUtils.info('Order execution processor');
                    result = await this.orderExecutionProcessor(body);
                    break;
                case CRON_JOB_ENUM.disable_unclassified_goals:
                case CRON_JOB_ENUM.payment_reversal:
                    utils_1.LoggingUtils.info('Order execution processor');
                    result = await this.orderExecutionProcessor(body);
                    break;
                case CRON_JOB_ENUM.instrument_and_mutual_fund_details_sync:
                case CRON_JOB_ENUM.mutual_fund_price_sync:
                case CRON_JOB_ENUM.systematic_method_settings_sync:
                case CRON_JOB_ENUM.instrument_last_price_sync:
                case CRON_JOB_ENUM.nse_index_master_sync:
                case CRON_JOB_ENUM.nse_index_price_sync:
                case CRON_JOB_ENUM.benchmark_return_sync:
                case CRON_JOB_ENUM.mutual_fund_rapm_sync:
                case CRON_JOB_ENUM.mutual_fund_aum_sync:
                case CRON_JOB_ENUM.mutual_fund_market_cap_sync:
                case CRON_JOB_ENUM.mutual_fund_return_sync:
                case CRON_JOB_ENUM.mutual_fund_sensitivity_sync:
                case CRON_JOB_ENUM.mutual_fund_holding_sync:
                case CRON_JOB_ENUM.index_master_sync:
                case CRON_JOB_ENUM.scheme_benchmark_sync:
                    utils_1.LoggingUtils.info('Market data processor');
                    result = await this.marketDataSyncProcessor(body);
                    break;
                case CRON_JOB_ENUM.dormant_users_check:
                case CRON_JOB_ENUM.goal_delete_cron:
                case CRON_JOB_ENUM.export_uam_reports:
                    utils_1.LoggingUtils.info('Data health checker processor');
                    result = await this.dataHealthCheckProcessor(body);
                    break;
                default:
                    result = new utils_1.RestError(400, 'Unknown Job');
                    break;
            }
            return result;
        }
        else {
            utils_1.LoggingUtils.error('API key invalid');
            return new utils_1.RestError(400, 'Authentication Failed');
        }
    }
    //Transactional Data Referesher Processor
    async transcationalDataReferesherProcessor(body) {
        try {
            utils_1.LoggingUtils.info('Cron Executor - transactional data refresher');
            let message = new queues_1.TransactionalDataRefreshingQueueMessage();
            message.eventType = body.eventType;
            message.cronJobName = body.cronJobName;
            await queues_1.QueueProducer.sendMessageInTransactionalDataRefreshingQueue(message).catch(err => {
                throw new Error(err);
            });
            return { success: true, message };
        }
        catch (error) {
            utils_1.LoggingUtils.error('Some Error Occurred');
            return new utils_1.RestError(400, 'Error occurred while sending Message Queue');
        }
    }
    //Market Data Sycn Processor
    async marketDataSyncProcessor(body) {
        try {
            utils_1.LoggingUtils.info('Cron Executor - market data processor');
            let message = new queues_1.MarketDataProcessingQueueMessage();
            message.eventType = body.eventType;
            message.cronJobName = body.cronJobName;
            await queues_1.QueueProducer.sendMessageInMarketDataProcessingQueue(message).catch(err => {
                throw new Error(err);
            });
            return { success: true, message };
        }
        catch (error) {
            utils_1.LoggingUtils.error('Some Error Occurred');
            return new utils_1.RestError(400, 'Error occurred while sending Message Queue');
        }
    }
    //Order execution  Processor
    async orderExecutionProcessor(body) {
        try {
            utils_1.LoggingUtils.info('Cron Executor - order processor');
            let message = new queues_1.OrderProcessingQueueMessage();
            message.eventType = body.eventType;
            message.cronJobName = body.cronJobName;
            await queues_1.QueueProducer.sendMessageInOrderProcessingQueue(message).catch(err => {
                throw new Error(err);
            });
            return { success: true, message };
        }
        catch (error) {
            utils_1.LoggingUtils.error('Some Error Occurred');
            return new utils_1.RestError(400, 'Error occurred while sending Message Queue');
        }
    }
    //Data health check
    async dataHealthCheckProcessor(body) {
        try {
            utils_1.LoggingUtils.info('Cron Executor - data health check');
            let message = new queues_1.DataHealthCheckingQueueMessage();
            message.eventType = body.eventType;
            message.cronJobName = body.cronJobName;
            await queues_1.QueueProducer.sendMessageInDataHealthCheckingQueue(message).catch(err => {
                throw new Error(err);
            });
            return { success: true, message };
        }
        catch (error) {
            utils_1.LoggingUtils.error('Some Error Occurred');
            return new utils_1.RestError(400, 'Error occurred while sending Message Queue');
        }
    }
};
BaseCronFacade = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], BaseCronFacade);
exports.BaseCronFacade = BaseCronFacade;
//# sourceMappingURL=base-cron.facade.js.map