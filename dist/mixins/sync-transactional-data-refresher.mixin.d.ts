import { juggler } from '@loopback/repository';
export declare abstract class SyncTransactionalDataRefresherMixin {
    static sendMessage(ctx: any, recordId?: number | number[]): Promise<void>;
    static register(modelClass: typeof juggler.PersistedModel): Promise<void>;
}
