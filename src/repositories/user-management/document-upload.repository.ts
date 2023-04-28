import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {DocumentUpload, DocumentUploadRelations} from '../../models';

export class DocumentUploadRepository extends BaseLocalRepository<
  DocumentUpload,
  typeof DocumentUpload.prototype.id,
  DocumentUploadRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(DocumentUpload, dataSource);
  }
}
