import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import path from 'path';
const storageConfig:any = {
  name: 'fileStorage',
  connector: 'loopback-component-storage',
  nameConflict: 'makeUnique',
  maxFileSize: '3221225472',
  mainBucket: null
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class StorageDataSource extends juggler.DataSource implements LifeCycleObserver {
  static dataSourceName = 'fileStorage';
  static readonly defaultConfig = storageConfig;

  constructor(
    @inject('datasources.config.fileStorage', {optional: true})
    dsConfig: object = storageConfig
  ) {
    if(process.env.ENV_TYPE == 'GKE'){
      storageConfig['provider'] = 'google';
      storageConfig['projectId'] = process.env.GCP_PROJECTID
      storageConfig['keyFilename'] = process.env.GCP_STORAGE_KEY
    } else {
      storageConfig['provider'] = 'filesystem';
      storageConfig['root'] = path.join(require('os').homedir())
    }
    super(dsConfig);
  }
}
