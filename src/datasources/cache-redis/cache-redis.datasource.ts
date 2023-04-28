import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
const fs = require('fs')



const createConfig = ()=>{
  let config :any = {
    name: 'cache_redis',
    connector: 'kv-redis',
    host: (process.env.COMMON_DS_CACHE_REDIS_HOST ?? '127.0.0.1'),
    port: (process.env.COMMON_DS_CACHE_REDIS_PORT ?? 6379),
    password: (process.env.COMMON_DS_CACHE_REDIS_PASSWORD ?? ''),
    username: (process.env.COMMON_DS_CACHE_REDIS_USERNAME ?? ''),
    db: 0
  };
  if(process.env.COMMON_DS_REDIS_TLS_ENABLED == "true" && process.env.COMMON_DS_REDIS_CA_CERT){
    const tlsConfig = {
      tls : {ca: fs.readFileSync(process.env.COMMON_DS_REDIS_CA_CERT) ,rejectUnauthorized:false}
    }
    config = {...config , ...tlsConfig}
  }
  return config
}

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CacheRedisRemoteDataSource extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'cache_redis';
  static readonly defaultConfig = createConfig();

  constructor(
    @inject('datasources.config.cache_redis', {optional: true})
    dsConfig: object = createConfig()
  ) {
    super(dsConfig);
  }
}
