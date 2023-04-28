import {hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel, ModelPortfolio} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    postgresql: {tableName: 'tenure'},
    plural: 'Tenures',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class Tenure extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'tenure_in_year', dataType: 'INT', nullable: 'N'}
  })
  tenureInYear?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'tenure_in_month', dataType: 'INT', nullable: 'N'}
  })
  tenureInMonth?: number;

  @hasMany(() => ModelPortfolio, {keyTo: 'tenureId'})
  modelPortfolios?: ModelPortfolio[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Tenure>) {
    super(data);
  }
}

export interface TenureRelations {
  // describe navigational properties here
}

export type TenureWithRelations = Tenure & TenureRelations;
