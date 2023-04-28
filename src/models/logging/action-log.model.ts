import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'action_log'},
    plural: 'ActionLogs',
    hiddenProperties: []
  }
})
export class ActionLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'action_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  actionName: string;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'action_properties', dataType: 'TEXT', nullable: 'Y'}
  })
  actionProperties?: object;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  @belongsTo(
    () => AppUser,
    {
      name: 'executedByAppUser',
      keyFrom: 'executedByAppUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_executed_by_app_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  'executedByAppUserId': number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ActionLog>) {
    super(data);
  }
}

export interface ActionLogRelations {
  // describe navigational properties here
}

export type ActionLogWithRelations = ActionLog & ActionLogRelations;
