import {bind, BindingScope, inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';


const createConfig = ()=>{
  const config = {
    name: 'logging_remote_rest',
    connector: 'rest',
    baseURL: (process.env.COMMON_LGGN_RMT_BSURL ?? 'http://localhost:3013/API/Logging'),
    crud: true
  };
  return config
}

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class LoggingRestRemoteDataSource extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'logging_remote_rest';
  static readonly defaultConfig = createConfig();

  constructor(
    @inject('datasources.config.logging_remote_rest', {optional: true})
    dsConfig: object = createConfig()
  ) {
    super(dsConfig);
  }
}
