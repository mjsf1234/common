import {model, property} from '@loopback/repository';
import {BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_health_checker_log_execution_date: {keys: {execution_date: 1}}
    },
    plural: 'HealthCheckerLogs',
    postgresql: {tableName: 'health_checker_log'},
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class HealthCheckerLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'job_name', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  jobName?: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'job_sequence', dataType: 'SMALLINT', nullable: 'N'}
  })
  jobSequence: number;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'execution_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  executionDate: Date;

  @property({
    type: 'number',
    optionLabelIdentifier: 'HEALTHCHECKERSTATUS',
    required: true,
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'remark', dataType: 'TEXT', nullable: 'Y'}
  })
  remark?: string;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<HealthCheckerLog>) {
    super(data);
  }
}

export interface HealthCheckerLogRelations {
  // describe navigational properties here
}

export type HealthCheckerLogWithRelations = HealthCheckerLog & HealthCheckerLogRelations;
