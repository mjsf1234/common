import {hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel, CommunicationMatrix} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'communication_topic'},
    plural: 'CommunicationTopics',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class CommunicationTopic extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'topic', dataType: 'VARCHAR', dataLength: 256, nullable: 'N'}
  })
  topic: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'category', dataType: 'TEXT', nullable: 'N'}
  })
  category: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'sub_category', dataType: 'TEXT', nullable: 'N'}
  })
  subCategory: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'email_template', dataType: 'TEXT', nullable: 'Y'}
  })
  emailTemplate?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'sms_template', dataType: 'TEXT', nullable: 'N'}
  })
  smsTemplate?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'push_notification_template', dataType: 'TEXT', nullable: 'Y'}
  })
  pushNotificationTemplate?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'N'}
  })
  description?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'mode_email', dataType: 'BOOLEAN', nullable: 'N'}
  })
  modeEmail: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'mode_sms', dataType: 'BOOLEAN', nullable: 'N'}
  })
  modeSms: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'mode_push', dataType: 'BOOLEAN', nullable: 'N'}
  })
  modePush: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'toggle_notification', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  toggleNotification?: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'temp_id', dataType: 'VARCHAR', dataLength: 25, nullable: 'Y'}
  })
  tempId?: string;

  @hasMany(() => CommunicationMatrix, {keyTo: 'communicationTopicId'})
  communicationMatrix?: CommunicationMatrix[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CommunicationTopic>) {
    super(data);
  }
}

export interface CommunicationTopicRelations {
  // describe navigational properties here
}

export type CommunicationTopicWithRelations = CommunicationTopic & CommunicationTopicRelations;
