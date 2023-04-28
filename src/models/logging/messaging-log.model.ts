import {model, property} from '@loopback/repository';
import {BaseDataDumpModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_queue_name_queue_message_id: {keys: {queue_name: 1, queue_message_id: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'messaging_log'},
    plural: 'MessagingLogs',
    hiddenProperties: []
  }
})
export class MessagingLog extends BaseDataDumpModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'queue_name', dataType: 'VARCHAR', dataLength: 512, nullable: 'N'}
  })
  queueName: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'queue_message_id', dataType: 'VARCHAR', dataLength: 512, nullable: 'N'}
  })
  queueMessageId: string;

  @property({
    type: 'object',
    required: true,
    postgresql: {columnName: 'message_body', dataType: 'TEXT', nullable: 'N'}
  })
  messageBody: object;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'message_published_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  messagePublishedDate: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'message_consumed_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  messageConsumedDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'message_processed_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  messageProcessedDate?: Date;

  @property({
    required: false,
    postgresql: {columnName: 'log_gen_time', dataType: 'TIMESTAMP', nullable: 'Y'}
  })
  logGenTime?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<MessagingLog>) {
    super(data);
  }
}

export interface MessagingLogRelations {
  // describe navigational properties here
}

export type MessagingLogWithRelations = MessagingLog & MessagingLogRelations;
