import {CryptoUtils, LoggingUtils} from './utils';

/**
 * Cron job configurations
 */
export const configuration = [
  //Config form order processors
  {
    name: 'forward_feed',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'forward_feed',
      eventType: 'TRANSACTION_FEED_GENERATION_CRON'
    },
    cron: '5 9,14 * * 1-5'
  },
  {
    name: 'forward_feed_2',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'forward_feed',
      eventType: 'TRANSACTION_FEED_GENERATION_CRON'
    },
    cron: '35 12 * * 1-5'
  },
  {
    name: 'systematic_generator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'systematic_generator',
      eventType: 'SYSTEMATIC_METHOD_EXECUTION_CRON'
    },
    cron: '00 3 * * *'
  },
  {
    name: 'payment_reconcilation',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'payment_reconcilation',
      eventType: 'PAYMENT_RECONCILIATION_EXECUTOR_CRON'
    },
    cron: '10 8-20 * * *'
  },
  {
    name: 'payment_reconcilation_final_cron',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'payment_reconcilation_final_cron',
      eventType: 'PAYMENT_RECONCILIATION_FINAL_EXECUTOR_CRON'
    },
    cron: '15 14 * * *'
  },
  {
    name: 'payment_reconcilation_sip',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'payment_reconcilation',
      eventType: 'PAYMENT_RECONCILIATION_SIP_EXECUTOR_CRON'
    },
    cron: '45 4-13 * * *'
  },
  {
    name: 'payment_reconcilation_sip_final_cron',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'payment_reconcilation_final_cron',
      eventType: 'PAYMENT_RECONCILIATION_SIP_FINAL_EXECUTOR_CRON'
    },
    cron: '00 14 * * *'
  },
  {
    name: 'debit_sip_transaction_executor',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'debit_sip_transaction',
      eventType: 'DEBIT_SIP_TRANSACTION_CRON'
    },
    cron: '30 4-13 * * *'
  },
  {
    name: 'unclassified_goals',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'disable_unclassified_goals',
      eventType: 'DISABLE_UNUSED_UNCLASSIFIED_GOALS_CRON'
    },
    cron: '0 3 * * *'
  },
  // Market data syc porcessors
  {
    name: 'instrument_and_mutual_fund_details_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'instrument_and_mutual_fund_details_sync',
      eventType: 'MUTUAL_FUND_DETAILS_SYNC_CRON'
    },
    cron: '0 5,12,16 * * *'
  },
  {
    name: 'systematic_method_settings_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'systematic_method_settings_sync',
      eventType: 'SYSTEMATIC_METHOD_SETTING_SYNC_CRON'
    },
    cron: '0 6,13,17 * * *'
  },
  {
    name: 'mutual_fund_price_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'mutual_fund_price_sync',
      eventType: 'MUTUAL_FUND_PRICES_SYNC_CRON'
    },
    cron: '0 0,7,14,18 * * *'
  },
  {
    name: 'mutual_fund_price_sync_2',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'mutual_fund_price_sync',
      eventType: 'MUTUAL_FUND_PRICES_SYNC_CRON'
    },
    cron: '30 21 * * *'
  },
  {
    name: 'instrument_last_price_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'instrument_last_price_sync',
      eventType: 'INSTRUMENT_LAST_PRICE_SYNC_CRON'
    },
    cron: '0 1,8,15 * * *'
  },
  {
    name: 'instrument_last_price_sync_2',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'instrument_last_price_sync',
      eventType: 'INSTRUMENT_LAST_PRICE_SYNC_CRON'
    },
    cron: '30 22 * * *'
  },
  {
    name: 'nse_index_master_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'nse_index_master_sync',
      eventType: 'NSE_INDEX_MASTER_SYNC_CRON'
    },
    cron: '0 0,6,12,18 * * *'
  },
  {
    name: 'index_master_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'index_master_sync',
      eventType: 'INDEX_MASTER_SYNC_CRON'
    },
    cron: '10 0,6,12,18 * * *'
  },

  {
    name: 'scheme_benchmark_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'scheme_benchmark_sync',
      eventType: 'SCHEME_BENCHMARK_SYNC_CRON'
    },
    cron: '0 0 7 * *'
  },
  {
    name: 'nse_index_price_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'nse_index_price_sync',
      eventType: 'NSE_INDEX_PRICE_SYNC_CRON'
    },
    cron: '0 1,7,13,19 * * *'
  },
  {
    name: 'benchmark_return_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'benchmark_return_sync',
      eventType: 'BENCHMARK_RETURN_SYNC_CRON'
    },
    cron: '0 1,7,13,19 * * *'
  },
  // //Transcation Data referesher processors
  {
    name: 'instrument_reporting_replicator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'instrument_reporting_replicator',
      eventType: 'INSTRUMENT_REPLICATION_CRON'
    },
    cron: '0 7,14,18 * * *'
  },
  {
    name: 'instrument_price_reporting',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'instrument_price_reporting',
      eventType: 'INSTRUMENT_PRICES_REPLICATION_CRON'
    },
    cron: '30 0,7,14,18 * * *'
  },
  {
    name: 'instrument_price_reporting_2',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'instrument_price_reporting',
      eventType: 'INSTRUMENT_PRICES_REPLICATION_CRON'
    },
    cron: '0 22 * * *'
  },
  {
    name: 'systematic_method_replicator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'systematic_method_replicator',
      eventType: 'SYSTEMATIC_METHOD_REPLICATION_CRON'
    },
    cron: '0 2 * * *'
  },
  {
    name: 'order_item_replicator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'order_item_replicator',
      eventType: 'ORDER_ITEM_REPLICATION_CRON'
    },
    cron: '30 2,8,14,20 * * *'
  },
  {
    name: 'transaction_replicator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'transaction_replicator',
      eventType: 'TRANSACTION_REPLICATION_CRON'
    },
    cron: '0 3 * * *'
  },
  //added in holding data refresher
  // {
  //   name: 'holding_calculator',
  //   path: `/API/UserManagement/invokeCron`,
  //   body: {
  //     cronJobName: 'holding_calculator',
  //     eventType: 'HOLDING_CALCULATOR_CRON'
  //   },
  //   cron: '0 0 * * *'
  // },
  {
    name: 'deposit_holding_calculation',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'deposit_holding_calculation',
      eventType: 'DEPOSIT_HOLDING_CALCULATION_CRON'
    },
    cron: '15 0 * * *'
  },
  //added in holding data refresher
  // {
  //   name: 'holding_replicator',
  //   path: `/API/UserManagement/invokeCron`,
  //   body: {
  //     cronJobName: 'holding_replicator',
  //     eventType: 'HOLDING_REPLICATION_CRON'
  //   },
  //   cron: '30 0 * * *'
  // },
  {
    name: 'holding_data_refresher',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'holding_data_refresher',
      eventType: 'HOLDING_DATA_REFRESHER_CRON'
    },
    cron: '15 1 * * *'
  },
  {
    name: 'gain_calculator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'gain_calculator',
      eventType: 'GAIN_CALCULATOR_CRON'
    },
    cron: '0 1 * * *'
  },
  {
    name: 'gain_replicator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'gain_replicator',
      eventType: 'GAIN_REPLICATION_CRON'
    },
    cron: '30 1 * * *'
  },
  {
    name: 'fatca_generation',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'fatca_generation',
      eventType: 'FATCA_FILE_GENERATION_CRON'
    },
    cron: '45 12,14 * * 1-5'
  },
  {
    name: 'nominee_document_generation',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'nominee_document_generation',
      eventType: 'NOMINEE_DOCUMENT_GENERATION_CRON'
    },
    cron: '0 13,15 * * 1-5'
  },
  {
    name: 'balance_sheet_replicator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'balance_sheet_replicator',
      eventType: 'BALANCE_SHEET_REPLICATION_CRON'
    },
    cron: '0 22 * * *'
  },
  {
    name: 'document_generator',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'document_generator',
      eventType: 'DOCUMENT_GENERATOR_CRON'
    },
    cron: '45 9,12,14 * * 1-5'
  },
  {
    name: 'dormant_users_check',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'dormant_users_check',
      eventType: 'DORMANT_USERS_CHECK_CRON'
    },
    cron: '0 15 * * 1-5'
  },
  {
    name: 'mutual_fund_rapm_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'mutual_fund_rapm_sync',
      eventType: 'MUTUAL_FUND_RAPM_SYNC_CRON'
    },
    cron: '15 0 1-7 * *'
  },
  {
    name: 'mutual_fund_aum_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'mutual_fund_aum_sync',
      eventType: 'MUTUAL_FUND_AUM_SYNC_CRON'
    },
    cron: '20 0 1-7 * *'
  },
  {
    name: 'mutual_fund_market_cap_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'mutual_fund_market_cap_sync',
      eventType: 'MUTUAL_FUND_MARKET_CAP_SYNC_CRON'
    },
    cron: '25 0 1-7 * *'
  },
  {
    name: 'mutual_fund_return_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'mutual_fund_return_sync',
      eventType: 'MUTUAL_FUND_RETURN_SYNC_CRON'
    },
    cron: '45 6 * * *'
  },
  {
    name: 'mutual_fund_sensitivity_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'mutual_fund_sensitivity_sync',
      eventType: 'MUTUAL_FUND_SENSITIVITY_SYNC_CRON'
    },
    cron: '40 0 1-7 * *'
  },
  {
    name: 'mutual_fund_holding_sync',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'mutual_fund_holding_sync',
      eventType: 'MUTUAL_FUND_HOLDING_SYNC_CRON'
    },
    cron: '45 0 1-7 * *'
  },
  {
    name: 'goal_delete_cron',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'goal_delete_cron',
      eventType: 'GOAL_DELETE_CRON'
    },
    cron: '0 15 * * *'
  },
  {
    name: 'handle_mature_deposit_cron',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'handle_mature_deposit_cron',
      eventType: 'HANDLE_MATURE_DEPOSIT_CRON'
    },
    cron: '0 1 * * *'
  },

  {
    name: 'payment_reversal',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'payment_reversal',
      eventType: 'PAYMENT_REVERSAL_EXECUTOR_CRON'
    },
    cron: '*/15 * * * *'
  },
  {
    name: 'validate_pan_aadhar_link',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'validate_pan_aadhar_link',
      eventType: 'VALIDATE_PAN_AADHAR_LINK'
    },
    cron: '0 15 * * *'
  },
  {
    name: 'export_uam_reports',
    path: `/API/UserManagement/invokeCron`,
    body: {
      cronJobName: 'export_uam_reports',
      eventType: 'EXPORT_UAM_REPORTS'
    },
    cron: '0 15 * * *'
  }
];

/**
 * Create a job with an App Engine target via the Cloud Scheduler API
 */
async function createJob(config: any) {
  // [START cloud_scheduler_create_job]
  const scheduler = await import('@google-cloud/scheduler');

  // Create a client.
  const client = new scheduler.CloudSchedulerClient();

  // TODO(developer): Uncomment and set the following variables
  const projectId = process.env.GCP_PROJECTID as string;
  const locationId = process.env.GCP_LOCATIONID as string;
  const url = process.env.GCP_TARGET_URL as string;
  const env = process.env.NODE_ENV as string;
  const apiKey = process.env.GCP_CRON_API_KEY as string;
  const jobName = `projects/${projectId}/locations/${locationId}/jobs/${config.name}-${env}`;

  // Construct the fully qualified location path.
  const parent = client.locationPath(projectId, locationId);

  // Construct the request body.
  const job = {
    name: jobName,
    httpTarget: {
      uri: `${url}${config.path}`,
      httpMethod: 'POST',
      headers: {'CRON-API-KEY': apiKey},
      body: Buffer.from(CryptoUtils.encrypt(JSON.stringify(config.body)))
    },
    schedule: config.cron,
    timeZone: 'Asia/Calcutta'
  };

  const request: any = {
    parent: parent,
    job: job
  };

  // Use the client to send the job creation request.
  client
    .getJob({name: jobName})
    .then(async data => {
      LoggingUtils.info(`Job Exist ?  ${data[0].name}`);
      const [response] = await client.deleteJob({name: data[0].name});
      LoggingUtils.info(`Existed job deleted ?: ${JSON.stringify(response)}`);
    })
    .catch(error => {
      LoggingUtils.error(`Job not found ? , ${error.message}`);
    })
    .finally(async () => {
      const [response] = await client.createJob(request);
      LoggingUtils.info(`Created job: ${response.name}`);
    });
}

configuration.forEach(config => {
  createJob(config).catch(err => {
    LoggingUtils.error(err);
    process.exitCode = 1;
  });
});
