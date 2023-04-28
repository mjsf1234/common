import { BaseLocalRepository } from '..';
import { juggler } from '@loopback/repository';
import { WmsGenericMessage, WmsGenericMessageRelations } from '../../models';
export declare class WmsGenericMessageRepository extends BaseLocalRepository<WmsGenericMessage, typeof WmsGenericMessage.prototype.id, WmsGenericMessageRelations> {
    constructor(dataSource: juggler.DataSource);
}
