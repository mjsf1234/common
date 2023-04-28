import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'DailyInstrumentRollingAlphaSnapshotReportings',
    indexes: {},
    elasticsearch: {
      index: 'dailyinstrumentrollingalphasnapshotreporting',
      type: 'dailyinstrumentrollingalphasnapshot'
    },
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class DailyInstrumentRollingAlphaSnapshotReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    es: {type: 'long'}
  })
  dailyInstrumentRollingAlphaSnapshotId: number;

  @property({
    type: 'date',
    required: true,
    es: {type: 'date'}
  })
  effectiveDate: Date;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  returnFor1Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  returnFor3Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  returnFor6Month?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  returnFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  returnFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  returnFor5Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  sharpeRatioFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  sharpeRatioFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  sharpeRatioFor5Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  volatilityFor1Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  volatilityFor2Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  volatilityFor3Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  volatilityFor5Year?: number;

  @property({
    type: 'number',
    es: {type: 'double'}
  })
  avgReturn1Year?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  instrumentId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  instrumentName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<DailyInstrumentRollingAlphaSnapshotReporting>) {
    super(data);
  }
}

export interface DailyInstrumentRollingAlphaSnapshotReportingRelations {
  // describe navigational properties here
}

export type DailyInstrumentRollingAlphaSnapshotReportingWithRelations = DailyInstrumentRollingAlphaSnapshotReporting &
  DailyInstrumentRollingAlphaSnapshotReportingRelations;
