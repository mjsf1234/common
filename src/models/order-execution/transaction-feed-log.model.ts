import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {BaseDataDumpModel, Rta, OrderExecutionAppFile} from '..';
import {OrderItem} from './order-item.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}}
    },
    plural: 'TransactionFeedLogs',
    postgresql: {tableName: 'transaction_feed_log'},
    foreignKeys: {
      fkidx_txn_feed_log_app_file_fk_id_app_file: {
        name: 'fkidx_txn_feed_log_app_file_fk_id_app_file',
        foreignKey: 'fk_id_app_file',
        entityKey: 'id',
        entity: 'AppFile'
      },
      fkidx_txn_feed_log_rta_fk_id_rta: {
        name: 'fkidx_txn_feed_log_rta_fk_id_rta',
        foreignKey: 'fk_id_rta',
        entityKey: 'id',
        entity: 'RTA'
      }
    },
    hiddenProperties: []
  }
})
export class TransactionFeedLog extends BaseDataDumpModel {
  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'row_count', dataType: 'INT', nullable: 'N'}
  })
  rowCount: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'TRANSACTIONFEEDSTATUS',
    required: true,
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  generatedDate: Date;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'uploaded_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  uploadedDate: Date;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'success_count', dataType: 'INT', nullable: 'N'}
  })
  successCount: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'failure_count', dataType: 'INT', nullable: 'N'}
  })
  failureCount: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  remarks?: string;

  @belongsTo(
    () => OrderExecutionAppFile,
    {
      name: 'txnFeedFile',
      keyFrom: 'txnFeedFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_txn_feed_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  txnFeedFileId: number;

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

  @hasMany(() => OrderItem, {keyTo: 'txnFeedLogId'})
  orderItems?: OrderItem[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TransactionFeedLog>) {
    super(data);
  }
}

export interface TransactionFeedLogRelations {
  // describe navigational properties here
}

export type TransactionFeedLogWithRelations = TransactionFeedLog & TransactionFeedLogRelations;
