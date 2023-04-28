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
    postgresql: {tableName: 'wms_generic_messages'},
    plural: 'WmsGenericMessages',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class WmsGenericMessage extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'error_code', dataType: 'VARCHAR', dataLength: 256, nullable: 'N'}
  })
  errorCode: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'error_message', dataType: 'TEXT', nullable: 'N'}
  })
  errorMessage: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'cust_error_code', dataType: 'VARCHAR', dataLength: 256, nullable: 'N'}
  })
  custErrorCode: string;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'WMSGENERICMESSAGES',
    postgresql: {columnName: 'wms_generic_message_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  wmsGenericMessageStatus: number;

  @property({
    type: 'boolean',
    required: false,
    default: false,
    postgresql: {columnName: 'inquiry_flag', dataType: 'BOOLEAN', nullable: 'N'}
  })
  inquiryFlag?: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<WmsGenericMessage>) {
    super(data);
  }
}

export interface WmsGenericMessageRelations {
  // describe navigational properties here
}

export type WmsGenericMessageWithRelations = WmsGenericMessage & WmsGenericMessageRelations;
