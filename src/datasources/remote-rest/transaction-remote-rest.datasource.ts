import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';


const createConfig = ()=>{
  const config = {
    name: 'transaction_remote_rest',
    connector: 'rest',
    baseURL: (process.env.COMMON_TRNSC_RMT_BSURL ?? 'http://localhost:3017/API/Transaction'),
    crud: true
  };
  return config
}

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class TransactionRemoteRestDataSource extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'transaction_remote_rest';
  static readonly defaultConfig = createConfig();

  constructor(
    @inject('datasources.config.transaction_remote_rest', {optional: true})
    dsConfig: object = createConfig()
  ) {
    super(dsConfig);
  }
}
