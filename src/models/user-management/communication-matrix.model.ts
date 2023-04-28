import {belongsTo, model, property} from '@loopback/repository';
import {Account, AppUser, BaseSQLModel, CommunicationTopic, State} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'communication_matrix'},
    plural: 'CommunicationMatrix',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class CommunicationMatrix extends BaseSQLModel {
  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'mode_email', dataType: 'BOOLEAN', nullable: 'N'}
  })
  modeEmail: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'mode_sms', dataType: 'BOOLEAN', nullable: 'N'}
  })
  modeSms: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'mode_push', dataType: 'BOOLEAN', nullable: 'N'}
  })
  modePush: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'toggle_notification', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  toggleNotification?: boolean;

  @belongsTo(
    () => CommunicationTopic,
    {
      name: 'communicationTopic',
      keyFrom: 'communicationTopicId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_communication_topic', dataType: 'INT', nullable: 'Y'}
    }
  )
  communicationTopicId: number;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  accountId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CommunicationMatrix>) {
    super(data);
  }
}

export interface CommunicationMatrixRelations {
  // describe navigational properties here
}

export type CommunicationMatrixWithRelations = CommunicationMatrix & CommunicationMatrixRelations;
