import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'captcha'},
    plural: 'Captchas',
    hiden: ['captchaText']
  }
})
export class Captcha extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'captcha_text', dataType: 'VARCHAR', dataLength: 10, nullable: 'N'}
  })
  captchaText: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'svg', dataType: 'TEXT', nullable: 'N'}
  })
  svg: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'N'}
  })
  uniqueId: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  expiry: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Captcha>) {
    super(data);
  }
}

export interface CaptchaRelations {
  // describe navigational properties here
}

export type CaptchaWithRelations = Captcha & CaptchaRelations;
