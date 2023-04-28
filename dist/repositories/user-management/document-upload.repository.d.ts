import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { DocumentUpload, DocumentUploadRelations } from '../../models';
export declare class DocumentUploadRepository extends BaseLocalRepository<DocumentUpload, typeof DocumentUpload.prototype.id, DocumentUploadRelations> {
    constructor(dataSource: juggler.DataSource);
}
