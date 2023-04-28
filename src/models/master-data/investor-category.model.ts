import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'investor_category'},
    plural: 'InvestorCategories',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class InvestorCategory extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InvestorCategory>) {
    super(data);
  }
}

export interface InvestorCategoryRelations {
  // describe navigational properties here
}

export type InvestorCategoryWithRelations = InvestorCategory & InvestorCategoryRelations;
