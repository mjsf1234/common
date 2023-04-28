import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {
  MarketDataProcessingQueueMessage,
  OrderProcessingQueueMessage,
  QueueProducer,
  TransactionalDataRefreshingQueueMessage,
  DataHealthCheckingQueueMessage
} from '../../../queues';
import {LoggingUtils, RestError} from '../../../utils';

export type Cron_Body = {
  eventType: string;
  cronJobName: string;
};

// All business loigc goes inside Facade layer
export enum CRON_JOB_ENUM {
  //Order execution Processor
  forward_feed = 'forward_feed',
  systematic_generator = 'systematic_generator',
  payment_reconcilation = 'payment_reconcilation',
  payment_reconcilation_final_cron = 'payment_reconcilation_final_cron',
  debit_sip_transaction = 'debit_sip_transaction',
  disable_unclassified_goals = 'disable_unclassified_goals',
  payment_reconcilation_sip='payment_reconcilation_sip',
  payment_reconcilation_sip_final_cron='payment_reconcilation_sip_final_cron',
  //Market Data Sync processor
  instrument_and_mutual_fund_details_sync = 'instrument_and_mutual_fund_details_sync',
  systematic_method_settings_sync = 'systematic_method_settings_sync',
  mutual_fund_price_sync = 'mutual_fund_price_sync',
  instrument_last_price_sync = 'instrument_last_price_sync',
  nse_index_master_sync = 'nse_index_master_sync',
  nse_index_price_sync = 'nse_index_price_sync',
  benchmark_return_sync = 'benchmark_return_sync',
  mutual_fund_rapm_sync = 'mutual_fund_rapm_sync',
  mutual_fund_aum_sync = 'mutual_fund_aum_sync',
  mutual_fund_market_cap_sync = 'mutual_fund_market_cap_sync',
  mutual_fund_return_sync = 'mutual_fund_return_sync',
  mutual_fund_sensitivity_sync = 'mutual_fund_sensitivity_sync',
  mutual_fund_holding_sync = 'mutual_fund_holding_sync',
  index_master_sync = 'index_master_sync',
  scheme_benchmark_sync ='scheme_benchmark_sync',
  // Transcational data referesher processor
  instrument_reporting_replicator = 'instrument_reporting_replicator',
  instrument_price_reporting = 'instrument_price_reporting',
  systematic_method_replicator = 'systematic_method_replicator',
  order_item_replicator = 'order_item_replicator',
  transaction_replicator = 'transaction_replicator',
  holding_calculator = 'holding_calculator',
  deposit_holding_calculation = 'deposit_holding_calculation',
  holding_replicator = 'holding_replicator',
  holding_data_refresher = 'holding_data_refresher',
  gain_calculator = 'gain_calculator',
  gain_replicator = 'gain_replicator',
  fatca_generation = 'fatca_generation',
  balance_sheet_replicator = 'balance_sheet_replicator',
  document_generator = 'document_generator',
  nominee_document_generation = 'nominee_document_generation',
  handle_mature_deposit_cron = 'handle_mature_deposit_cron',
  // Data health check cron
  dormant_users_check = 'dormant_users_check',
  goal_delete_cron = 'goal_delete_cron',
  payment_reversal='payment_reversal',
  export_uam_reports = 'export_uam_reports',
  validate_pan_aadhar_link = 'validate_pan_aadhar_link'
}

const API_KEY = process.env.GCP_CRON_API_KEY as string;

@injectable({scope: BindingScope.TRANSIENT})
export class BaseCronFacade {
  constructor() { }

  async processBody(body: Cron_Body, headers: any) {
    LoggingUtils.info('Invoke processBody');
    if (headers['cron-api-key'] == API_KEY) {
      LoggingUtils.info('API key is valid');
      let result: any;
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
          LoggingUtils.info('Transcational data referesher processor');
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
          LoggingUtils.info('Order execution processor');
          result = await this.orderExecutionProcessor(body);
          break;

        case CRON_JOB_ENUM.disable_unclassified_goals:
        case CRON_JOB_ENUM.payment_reversal:
          LoggingUtils.info('Order execution processor');
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
          LoggingUtils.info('Market data processor');
          result = await this.marketDataSyncProcessor(body);
          break;

        case CRON_JOB_ENUM.dormant_users_check:
        case CRON_JOB_ENUM.goal_delete_cron:
        case CRON_JOB_ENUM.export_uam_reports:
          LoggingUtils.info('Data health checker processor');
          result = await this.dataHealthCheckProcessor(body);
          break;
        default:
          result = new RestError(400, 'Unknown Job');
          break;
      }
      return result;
    } else {
      LoggingUtils.error('API key invalid');
      return new RestError(400, 'Authentication Failed');
    }
  }

  //Transactional Data Referesher Processor
  async transcationalDataReferesherProcessor(body: any) {
    try {
      LoggingUtils.info('Cron Executor - transactional data refresher');
      let message = new TransactionalDataRefreshingQueueMessage();
      message.eventType = body.eventType;
      message.cronJobName = body.cronJobName;
      await QueueProducer.sendMessageInTransactionalDataRefreshingQueue(message).catch(err => {
        throw new Error(err);
      });
      return {success: true, message};
    } catch (error) {
      LoggingUtils.error('Some Error Occurred');
      return new RestError(400, 'Error occurred while sending Message Queue');
    }
  }

  //Market Data Sycn Processor
  async marketDataSyncProcessor(body: any) {
    try {
      LoggingUtils.info('Cron Executor - market data processor');
      let message = new MarketDataProcessingQueueMessage();
      message.eventType = body.eventType;
      message.cronJobName = body.cronJobName;
      await QueueProducer.sendMessageInMarketDataProcessingQueue(message).catch(err => {
        throw new Error(err);
      });
      return {success: true, message};
    } catch (error) {
      LoggingUtils.error('Some Error Occurred');
      return new RestError(400, 'Error occurred while sending Message Queue');
    }
  }

  //Order execution  Processor
  async orderExecutionProcessor(body: any) {
    try {
      LoggingUtils.info('Cron Executor - order processor');
      let message = new OrderProcessingQueueMessage();
      message.eventType = body.eventType;
      message.cronJobName = body.cronJobName;
      await QueueProducer.sendMessageInOrderProcessingQueue(message).catch(err => {
        throw new Error(err);
      });
      return {success: true, message};
    } catch (error) {
      LoggingUtils.error('Some Error Occurred');
      return new RestError(400, 'Error occurred while sending Message Queue');
    }
  }
  //Data health check
  async dataHealthCheckProcessor(body: any) {
    try {
      LoggingUtils.info('Cron Executor - data health check');
      let message = new DataHealthCheckingQueueMessage();
      message.eventType = body.eventType;
      message.cronJobName = body.cronJobName;
      await QueueProducer.sendMessageInDataHealthCheckingQueue(message).catch(err => {
        throw new Error(err);
      });
      return {success: true, message};
    } catch (error) {
      LoggingUtils.error('Some Error Occurred');
      return new RestError(400, 'Error occurred while sending Message Queue');
    }
  }
}
