import { juggler } from '@loopback/repository';
export declare abstract class OptionLabelMixin {
    static register(modelClass: typeof juggler.PersistedModel): Promise<void>;
}
