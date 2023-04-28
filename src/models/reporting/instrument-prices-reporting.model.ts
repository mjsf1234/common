import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'InstrumentPricesReportings',
    indexes: {},
    elasticsearch: {index: 'instrumentpricesreporting', type: 'instrumentprice'},
    hiddenProperties: []
  }
})
export class InstrumentPricesReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentPriceId?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentId?: number;

  @property({
    type: 'string',
    es: {type: 'text'}
  })
  instrumentFullName?: string;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  priceDate?: Date;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  price?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  openPrice?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  lowPrice?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  highPrice?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  closePrice?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  movementFromPreviousPrice?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  percentageMovementFromPreviousPrice?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  source?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  accruedInterest?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstrumentPricesReporting>) {
    super(data);
  }
}

export interface InstrumentPricesReportingRelations {
  // describe navigational properties here
}

export type InstrumentPricesReportingWithRelations = InstrumentPricesReporting & InstrumentPricesReportingRelations;
