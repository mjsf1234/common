import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, AppUser} from '..';
import {TransactionAppFile} from './transaction-app-file.model';

@model({
  settings: {
    strict: true,
    postgresql: {
      tableName: 'cas_request',
      plural: 'CasRequests',
      foreignKeys: {
        fkidx_cas_log_cas_fk_id_user: {
          name: 'fkidx_cas_log_cas_fk_id_user',
          foreignKey: 'fk_id_user',
          entityKey: 'id',
          entity: 'AppUser'
        },
        fkidx_cas_log_file_fk_id_file: {
          name: 'fkidx_cas_log_file_fk_id_file',
          foreignKey: 'fk_id_cas_file',
          entityKey: 'id',
          entity: 'AppFile'
        }
      }
    },
    hiddenProperties: []
  }
})
export class CasRequest extends BaseSQLModel {
  @property({
    type: 'string',
    required: false,
    postgresql: {
      columnName: 'cas_reference_number',
      dataType: 'VARCHAR',
      dataLength: 30,
      nullable: 'Y'
    }
  })
  casReferenceNumber?: string;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'CASREADTYPE',
    postgresql: {
      columnName: 'read_type',
      dataType: 'SMALLINT',
      __dataLength: 1,
      nullable: 'Y'
    }
  })
  readType?: number;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'CASTYPE',
    default: 1,
    postgresql: {
      columnName: 'cas_type',
      dataType: 'SMALLINT',
      __dataLength: 1,
      nullable: 'Y'
    }
  })
  casType?: number;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'CASREQUESTSTATUS',
    default: 1,
    postgresql: {
      columnName: 'status',
      dataType: 'SMALLINT',
      __dataLength: 1,
      nullable: 'Y'
    }
  })
  status?: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {
      columnName: 'triggered_date',
      dataType: 'TIMESTAMP WITH TIME ZONE',
      nullable: 'N'
    }
  })
  triggeredDate: Date;

  @property({
    type: 'date',
    required: false,
    postgresql: {
      columnName: 'received_date',
      dataType: 'TIMESTAMP WITH TIME ZONE',
      nullable: 'Y'
    }
  })
  receivedDate?: Date;

  @property({
    type: 'date',
    required: false,
    postgresql: {
      columnName: 'processed_date',
      dataType: 'TIMESTAMP WITH TIME ZONE',
      nullable: 'Y'
    }
  })
  processedDate?: Date;

  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user', dataType: 'INT', __dataLength: 11, nullable: 'Y'}
    }
  )
  appUserId: number;

  //@todo - have local file table
  @belongsTo(
    () => TransactionAppFile,
    {
      name: 'transactionAppFile',
      keyFrom: 'transactionAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file', dataType: 'INT', __dataLength: 11, nullable: 'Y'}
    }
  )
  transactionAppFileId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CasRequest>) {
    super(data);
  }
}

export interface CasRequestRelations {
  // describe navigational properties here
}

export type CasRequestWithRelations = CasRequest & CasRequestRelations;
