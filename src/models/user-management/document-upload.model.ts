import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

//@todo - Ketan - check the use of this table
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'document_upload'},
    plural: 'DocumentUploads',
    foreignKeys: {
      fkidx_document_upload_user_fk_id_user: {
        name: 'fkidx_document_upload_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_document_upload_bank_account_fk_id_bank_account: {
        name: 'fkidx_document_upload_bank_account_fk_id_bank_account',
        foreignKey: 'fk_id_bank_account',
        entityKey: 'id',
        entity: 'BankAccount'
      },
      fkidx_document_upload_account_fk_id_account: {
        name: 'fkidx_document_upload_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_document_upload_app_file_fk_id_app_file: {
        name: 'fkidx_document_upload_app_file_fk_id_app_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      }
    },
    hiddenProperties: []
  }
})
export class DocumentUpload extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'reference_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  referenceNumber?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'issue_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  issueDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'expiry_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  expiryDate?: Date;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'CUSTOMERDOCUMENTTYPE',
    postgresql: {columnName: 'document_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  documentType: number;

  @property({
    type: 'number'
  })
  fk_id_user?: number;

  @property({
    type: 'number'
  })
  fk_id_account?: number;

  @property({
    type: 'number'
  })
  fk_id_bank_account?: number;

  @property({
    type: 'number'
  })
  fk_id_file?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DocumentUpload>) {
    super(data);
  }
}

export interface DocumentUploadRelations {
  // describe navigational properties here
}

export type DocumentUploadWithRelations = DocumentUpload & DocumentUploadRelations;
