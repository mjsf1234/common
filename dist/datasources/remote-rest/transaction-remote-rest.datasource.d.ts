import { LifeCycleObserver } from '@loopback/core';
import { juggler } from '@loopback/repository';
export declare class TransactionRemoteRestDataSource extends juggler.DataSource implements LifeCycleObserver {
    static dataSourceName: string;
    static readonly defaultConfig: {
        name: string;
        connector: string;
        baseURL: string;
        crud: boolean;
    };
    constructor(dsConfig?: object);
}
