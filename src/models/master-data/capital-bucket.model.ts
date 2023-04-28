import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    postgresql: {tableName: 'capital_bucket'},
    plural: 'CapitalBuckets',
    foreignKeys: {},
    hiddenProperties: ['bosCode', 'nseCode', 'bseCode']
  }
})
export class CapitalBucket extends BaseSQLModel {
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
    postgresql: {columnName: 'short_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  shortName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  nseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  bseCode?: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'lower_limit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 3}
  })
  lowerLimit: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'upper_limit', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 3}
  })
  upperLimit: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<CapitalBucket>) {
    super(data);
  }
}

export interface CapitalBucketRelations {
  // describe navigational properties here
}

export type CapitalBucketWithRelations = CapitalBucket & CapitalBucketRelations;
