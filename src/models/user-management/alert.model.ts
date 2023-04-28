import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'alert'},
    plural: 'Alerts',
    foreignKeys: {
      fkidx_alert_user_fk_id_user: {
        name: 'fkidx_alert_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    },
    hiddenProperties: []
  }
})
export class Alert extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'message', dataType: 'TEXT', nullable: 'N'}
  })
  message: string;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'ALERTTYPE',
    postgresql: {columnName: 'type', dataType: 'SMALLINT', nullable: 'N'}
  })
  type: number;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_read_by_client', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isReadByClient: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_read_by_rm', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isReadByRM: boolean;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  expiry: Date;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  appUserId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Alert>) {
    super(data);
  }
}

export interface AlertRelations {
  // describe navigational properties here
}

export type AlertWithRelations = Alert & AlertRelations;
