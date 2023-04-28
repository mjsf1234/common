import {belongsTo, model, property} from '@loopback/repository';
import {TransactionAppFile, AppUser, BaseSQLModel, Rta} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'reverse_feed'},
    plural: 'ReverseFeeds',
    foreignKeys: {
      fkidx_reverse_feed_rta_fk_id_rta: {
        name: 'fkidx_reverse_feed_rta_fk_id_rta',
        foreignKey: 'fk_id_rta',
        entityKey: 'id',
        entity: 'RTA'
      },
      fkidx_reverse_feed_user_fk_id_uploaded_by_user: {
        name: 'fkidx_reverse_feed_user_fk_id_uploaded_by_user',
        foreignKey: 'fk_id_uploaded_by_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_reverse_feed_file_fk_id_file: {
        name: 'fkidx_reverse_feed_file_fk_id_file',
        foreignKey: 'fk_id_file',
        entityKey: 'id',
        entity: 'AppFile'
      },
      fkidx_reverse_feed_app_user_fk_id_user_deleted_by: {
        name: 'fkidx_reverse_feed_app_user_fk_id_user_deleted_by',
        foreignKey: 'fk_id_user_deleted_by',
        entityKey: 'id',
        entity: 'AppUser'
      }
    },
    hiddenProperties: ['fk_id_rta', 'fk_id_uploaded_by_user', 'fk_id_file', 'fk_id_user_deleted_by']
  }
})
export class ReverseFeed extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  name?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'REVERSEFEEDSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'batch_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  batchCode?: string;

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
  rtaId: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'uploadedByAppUser',
      keyFrom: 'uploadedByAppUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_uploaded_by_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  uploadedByAppUserId: number;

  //@todo - have separate file
  @belongsTo(
    () => TransactionAppFile,
    {
      name: 'transactionAppFile',
      keyFrom: 'transactionAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  transactionAppFileId: number;

  @belongsTo(
    () => TransactionAppFile,
    {
      name: 'transactionAppFile',
      keyFrom: 'transactionAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_reconciliation_file_id', dataType: 'INT', nullable: 'Y'}
    }
  )
  reverseFeedReconciliationFileId?: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'deletedByAppUser',
      keyFrom: 'deletedByAppUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_deleted_by', dataType: 'INT', nullable: 'Y'}
    }
  )
  deletedByAppUserId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ReverseFeed>) {
    super(data);
  }
}

export interface ReverseFeedRelations {
  // describe navigational properties here
}

export type ReverseFeedWithRelations = ReverseFeed & ReverseFeedRelations;
