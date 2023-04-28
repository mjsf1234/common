import {model, property} from '@loopback/repository';
import {BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_task_name: {keys: {task_name: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'data_sync_log'},
    plural: 'DataSyncLogs'
  }
})
export class DataSyncLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'source_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  sourceName: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'task_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  taskName: string;

  @property({
    type: 'number',
    required: true,
    default: 0,
    postgresql: {columnName: 'record_count', dataType: 'INT', nullable: 'N'}
  })
  recordCount: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  startDate: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  endDate?: Date;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DataSyncLog>) {
    super(data);
  }
}

export interface DataSyncLogRelations {
  // describe navigational properties here
}

export type DataSyncLogWithRelations = DataSyncLog & DataSyncLogRelations;
