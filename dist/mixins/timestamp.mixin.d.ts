import { juggler } from '@loopback/repository';
export declare abstract class TimestampMixin {
    static register(modelClass: typeof juggler.PersistedModel): Promise<void>;
}
