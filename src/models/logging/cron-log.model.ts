import {model, property} from '@loopback/repository';
import {BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_cron_job_name: {keys: {cron_job_name: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'cron_log'},
    plural: 'CronLogs',
    hiddenProperties: []
  }
})
export class CronLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'cron_job_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  cronJobName: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'command', dataType: 'VARCHAR', dataLength: 512, nullable: 'Y'}
  })
  command?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'CRONSTATUS',
    default: 1,
    required: true,
    postgresql: {columnName: 'cron_status', dataType: 'INT', nullable: 'Y'}
  })
  cronStatus: number;

  @property({
    type: 'object',
    postgresql: {columnName: 'log', dataType: 'TEXT', nullable: 'Y'}
  })
  log?: object;

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
    type: 'boolean',
    postgresql: {columnName: 'is_success', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isSuccess?: boolean;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CronLog>) {
    super(data);
  }
}

export interface CronLogRelations {
  // describe navigational properties here
}

export type CronLogWithRelations = CronLog & CronLogRelations;
