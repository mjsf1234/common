import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';


const createConfig = ()=>{
  const config = {
    name: 'reporting_remote_rest',
    connector: 'rest',
    baseURL: (process.env.COMMON_REPT_RMT_BSURL ?? 'http://localhost:3016/API/Reporting'),
    crud: true
  };
  return config
}

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ReportingRemoteRestDataSource extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'reporting_remote_rest';
  static readonly defaultConfig = createConfig();

  constructor(
    @inject('datasources.config.reporting_remote_rest', {optional: true})
    dsConfig: object = createConfig()
  ) {
    super(dsConfig);
  }
}
