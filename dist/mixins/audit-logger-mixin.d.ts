import { juggler } from '@loopback/repository';
export declare abstract class AuditLoggerMixin {
    static sendMessage(auditLog: any): Promise<void>;
    static register(modelClass: typeof juggler.PersistedModel): Promise<void>;
}
