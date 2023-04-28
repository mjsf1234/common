import {belongsTo, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, Rta, ServiceProvider, UserManagementAppFile} from '..';

//@todo - Ketan - check the use of this table
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'nominee_document'},
    plural: 'NomineeDocuments',
    foreignKeys: {

      fkidx_nominee_document_fk_id_service_provider: {
        name: 'fkidx_nominee_document_fk_id_service_provider',
        foreignKey: 'fk_id_service_provider',
        entityKey: 'id',
        entity: 'ServiceProvider'
      },
      fkidx_nominee_document_account_fk_id_account: {
        name: 'fkidx_nominee_document_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_nominee_document_app_file_fk_id_app_file: {
        name: 'fkidx_nominee_document_app_file_fk_id_app_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      },
      fkidx_nominee_document_rta_fk_id_rta: {
        name: 'fkidx_nominee_document_rta_fk_id_rta',
        foreignKey: 'fk_id_rta',
        entityKey: 'id',
        entity: 'RTA'
      }
    },
    hiddenProperties: []
  }
})
export class NomineeDocument extends BaseSQLModel {

  @property({
    type: 'date',
    postgresql: {columnName: 'generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  generatedDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'upload_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  uploadDate?: Date;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'NOMINEEDOCUMENTSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  status: number;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'aof_file_name', dataType: 'TEXT', nullable: 'Y'}
  })
  aofFileName?: string;


  @belongsTo(
    () => ServiceProvider,
    {
      name: 'serviceProvider',
      keyFrom: 'serviceProviderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y'}
    }
  )
  serviceProviderId?: number;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  accountId: number;



  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'appFile',
      keyFrom: 'appFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  appFileId?: number;

  @belongsTo(
    () => Rta,
    {
      name: 'rta',
      keyFrom: 'rtaId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rta', dataType: 'INT', nullable: 'Y'}
    }
  )
  rtaId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<NomineeDocument>) {
    super(data);
  }
}

export interface NomineeDocumentRelations {
  // describe navigational properties here
}

export type NomineeDocumentWithRelations = NomineeDocument & NomineeDocumentRelations;
