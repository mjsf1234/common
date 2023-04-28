import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import { SystematicMethod } from '../transaction';

@model({
  settings: {
    strict: false,
    plural: 'SystematicMethodLogs',
    postgresql: {tableName: 'systematic_method_log'},
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
    }
  }
})
export class SystematicMethodLog extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'sytematic_registration_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  systematicRegistrationNumber: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'failed_date', dataType: 'TIMESTAMP', nullable: 'N'}
  })
  failedDate?: Date;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'N'}
  })
  remarks: string;

  @belongsTo(
    () => SystematicMethod,
    {
      name: 'systematicMethod',
      keyFrom: 'systematicMethodId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_systematic_method', dataType: 'INT', nullable: 'N'}
    }
  )
  systematicMethodId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SystematicMethodLog>) {
    super(data);
  }
}

export interface SystematicMethodLogRelations {
  // describe navigational properties here
}

export type SystematicMethodLogWithRelations = SystematicMethodLog & SystematicMethodLogRelations;
