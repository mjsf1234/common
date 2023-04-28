import { juggler } from '@loopback/repository';
export declare abstract class FieldPseudonymizationMixin {
    static register(modelClass: typeof juggler.PersistedModel): Promise<void>;
}
