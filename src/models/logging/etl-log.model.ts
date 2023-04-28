import {belongsTo, model, property} from '@loopback/repository';
import {BaseDataDumpModel, BulkUpload} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'etl_log'},
    plural: 'EtlLogs',
    foreignKeys: {
      fkidx_etl_log_fk_id_bulk_upload: {
        name: 'fkidx_etl_log_fk_id_bulk_upload',
        foreignKey: 'fk_id_bulk_upload',
        entityKey: 'id',
        entity: 'BulkUpload'
      }
    },
    hiddenProperties: []
  }
})
export class EtlLog extends BaseDataDumpModel {
  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'row_number', dataType: 'INT', nullable: 'N'}
  })
  rowNumber: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'error_code', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  errorCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'error_message', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  errorMessage?: string;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  @belongsTo(
    () => BulkUpload,
    {
      name: 'bulkUpload',
      keyFrom: 'bulkUploadId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_bulk_upload', dataType: 'INT', nullable: 'Y'}
    }
  )
  bulkUploadId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<EtlLog>) {
    super(data);
  }
}

export interface EtlLogRelations {
  // describe navigational properties here
}

export type EtlLogWithRelations = EtlLog & EtlLogRelations;
