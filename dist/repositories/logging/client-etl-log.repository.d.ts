import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { ClientEtlLog, ClientEtlLogRelations } from '../../models';
export declare class ClientEtlLogRepository extends BaseLocalRepository<ClientEtlLog, typeof ClientEtlLog.prototype.id, ClientEtlLogRelations> {
    constructor(dataSource: juggler.DataSource);
}
