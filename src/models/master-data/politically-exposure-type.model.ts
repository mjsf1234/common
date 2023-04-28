import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    postgresql: {tableName: 'politically_exposure_type'},
    plural: 'PoliticallyExposureTypes',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class PoliticallyExposureType extends BaseSQLModel {
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
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  nseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bseCode?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<PoliticallyExposureType>) {
    super(data);
  }
}

export interface PoliticallyExposureTypeRelations {
  // describe navigational properties here
}

export type PoliticallyExposureTypeWithRelations = PoliticallyExposureType & PoliticallyExposureTypeRelations;
