import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    postgresql: {tableName: 'tax_slab'},
    plural: 'TaxSlabs',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class TaxSlab extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_value', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  minValue?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_value', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  maxValue?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<TaxSlab>) {
    super(data);
  }
}

export interface TaxSlabRelations {
  // describe navigational properties here
}

export type TaxSlabWithRelations = TaxSlab & TaxSlabRelations;
