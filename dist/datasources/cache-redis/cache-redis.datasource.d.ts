import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class CacheRedisRemoteDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: any;
    constructor(dsConfig?: object);
}
