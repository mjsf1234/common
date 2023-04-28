import {belongsTo, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, Rta, ServiceProvider, UserManagementAppFile} from '..';

//@todo - Ketan - check the use of this table
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'request_to_engines'},
    plural: 'RequestToEngines',
    foreignKeys: {
    },
    hiddenProperties: []
  }
})
export class RequestToEngine extends BaseSQLModel {

  @property({
    type: 'date',
    postgresql: {columnName: 'generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  generatedDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'requested_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  requestedDate?: Date;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'REQUESTTOENGINESTATUS',
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
    required: true,
    postgresql: {columnName: 'event_type', dataType: 'TEXT', nullable: 'N'}
  })
  eventType?: string;

  @property({
    type: 'boolean',
    required: false,
    default: false,
    postgresql: {columnName: 'is_parallel', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isParallel?: boolean;

  @property({
    type: 'object',
    default: {},
    required: false,
    postgresql: {columnName: 'parameters', dataType: 'TEXT', nullable: 'Y'}
  })
  parameters?: object;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RequestToEngine>) {
    super(data);
  }
}

export interface RequestToEngineRelations {
  // describe navigational properties here
}

export type RequestToEngineWithRelations = RequestToEngine & RequestToEngineRelations;
