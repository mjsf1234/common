import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_business_calender_date: {keys: {date: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    },
    plural: 'BusinessCalendar',
    postgresql: {tableName: 'business_calendar'},
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class BusinessCalendar extends BaseSQLModel {
  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  date: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'day', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  day?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'BUSINESSDAY',
    postgresql: {columnName: 'business_day_equity', dataType: 'SMALLINT', nullable: 'Y'}
  })
  businessDayEquity?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'BUSINESSDAY',
    postgresql: {columnName: 'business_day_fixed_income', dataType: 'SMALLINT', nullable: 'Y'}
  })
  businessDayFixedIncome?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'BUSINESSDAY',
    postgresql: {columnName: 'business_day_implementation', dataType: 'SMALLINT', nullable: 'Y'}
  })
  businessDayImplementation?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BusinessCalendar>) {
    super(data);
  }
}

export interface BusinessCalendarRelations {
  // describe navigational properties here
}

export type BusinessCalendarWithRelations = BusinessCalendar & BusinessCalendarRelations;
