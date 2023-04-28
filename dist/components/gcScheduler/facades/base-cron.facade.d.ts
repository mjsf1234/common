import { MarketDataProcessingQueueMessage, OrderProcessingQueueMessage, TransactionalDataRefreshingQueueMessage, DataHealthCheckingQueueMessage } from '../../../queues';
import { RestError } from '../../../utils';
export declare type Cron_Body = {
    eventType: string;
    cronJobName: string;
};
export declare enum CRON_JOB_ENUM {
    forward_feed = "forward_feed",
    systematic_generator = "systematic_generator",
    payment_reconcilation = "payment_reconcilation",
    payment_reconcilation_final_cron = "payment_reconcilation_final_cron",
    debit_sip_transaction = "debit_sip_transaction",
    disable_unclassified_goals = "disable_unclassified_goals",
    payment_reconcilation_sip = "payment_reconcilation_sip",
    payment_reconcilation_sip_final_cron = "payment_reconcilation_sip_final_cron",
    instrument_and_mutual_fund_details_sync = "instrument_and_mutual_fund_details_sync",
    systematic_method_settings_sync = "systematic_method_settings_sync",
    mutual_fund_price_sync = "mutual_fund_price_sync",
    instrument_last_price_sync = "instrument_last_price_sync",
    nse_index_master_sync = "nse_index_master_sync",
    nse_index_price_sync = "nse_index_price_sync",
    benchmark_return_sync = "benchmark_return_sync",
    mutual_fund_rapm_sync = "mutual_fund_rapm_sync",
    mutual_fund_aum_sync = "mutual_fund_aum_sync",
    mutual_fund_market_cap_sync = "mutual_fund_market_cap_sync",
    mutual_fund_return_sync = "mutual_fund_return_sync",
    mutual_fund_sensitivity_sync = "mutual_fund_sensitivity_sync",
    mutual_fund_holding_sync = "mutual_fund_holding_sync",
    index_master_sync = "index_master_sync",
    scheme_benchmark_sync = "scheme_benchmark_sync",
    instrument_reporting_replicator = "instrument_reporting_replicator",
    instrument_price_reporting = "instrument_price_reporting",
    systematic_method_replicator = "systematic_method_replicator",
    order_item_replicator = "order_item_replicator",
    transaction_replicator = "transaction_replicator",
    holding_calculator = "holding_calculator",
    deposit_holding_calculation = "deposit_holding_calculation",
    holding_replicator = "holding_replicator",
    holding_data_refresher = "holding_data_refresher",
    gain_calculator = "gain_calculator",
    gain_replicator = "gain_replicator",
    fatca_generation = "fatca_generation",
    balance_sheet_replicator = "balance_sheet_replicator",
    document_generator = "document_generator",
    nominee_document_generation = "nominee_document_generation",
    handle_mature_deposit_cron = "handle_mature_deposit_cron",
    dormant_users_check = "dormant_users_check",
    goal_delete_cron = "goal_delete_cron",
    payment_reversal = "payment_reversal",
    export_uam_reports = "export_uam_reports",
    validate_pan_aadhar_link = "validate_pan_aadhar_link"
}
export declare class BaseCronFacade {
    constructor();
    processBody(body: Cron_Body, headers: any): Promise<any>;
    transcationalDataReferesherProcessor(body: any): Promise<RestError | {
        success: boolean;
        message: TransactionalDataRefreshingQueueMessage;
    }>;
    marketDataSyncProcessor(body: any): Promise<RestError | {
        success: boolean;
        message: MarketDataProcessingQueueMessage;
    }>;
    orderExecutionProcessor(body: any): Promise<RestError | {
        success: boolean;
        message: OrderProcessingQueueMessage;
    }>;
    dataHealthCheckProcessor(body: any): Promise<RestError | {
        success: boolean;
        message: DataHealthCheckingQueueMessage;
    }>;
}
