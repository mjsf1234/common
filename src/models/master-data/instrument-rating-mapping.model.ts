import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';
import {RatingClassification} from './rating-classification.model';
import {Rating} from './rating.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_instrument_rating_mapping_instrument_name: {
        keys: {fk_id_instrument: 1, fk_id_rating_classification: 1},
        options: {unique: true, caseInsensitiveUnique: true}
      }
    },
    postgresql: {tableName: 'instrument_rating_mapping'},
    plural: 'InstrumentRatingMappings',
    foreignKeys: {
      fkidx_instrument_rating_mapping_fk_id_instrument: {
        name: 'fkidx_instrument_rating_mapping_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_instrument_rating_mapping_fk_id_rating: {
        name: 'fkidx_instrument_rating_mapping_fk_id_rating',
        foreignKey: 'fk_id_rating',
        entityKey: 'id',
        entity: 'Rating'
      },
      fkidx_instrument_rating_mapping_fk_id_rating_classification: {
        name: 'fkidx_instrument_rating_mapping_fk_id_rating_classification',
        foreignKey: 'fk_id_rating_classification',
        entityKey: 'id',
        entity: 'RatingClassification'
      }
    },
    hiddenProperties: []
  }
})
export class InstrumentRatingMapping extends BaseSQLModel {
  @property({
    type: 'number',
    default: 100,
    required: true,
    postgresql: {columnName: 'percentage', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  percentage: number;

  @belongsTo(
    () => Instrument,
    {
      name: 'instrument',
      keyFrom: 'instrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  instrumentId: number;

  @belongsTo(
    () => Rating,
    {
      name: 'rating',
      keyFrom: 'ratingId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rating', dataType: 'INT', nullable: 'Y'}
    }
  )
  ratingId: number;

  @belongsTo(
    () => RatingClassification,
    {
      name: 'ratingClassificarion',
      keyFrom: 'ratingClassificarionId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rating_classification', dataType: 'INT', nullable: 'Y'}
    }
  )
  ratingClassificarionId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstrumentRatingMapping>) {
    super(data);
  }
}

export interface InstrumentRatingMappingRelations {
  // describe navigational properties here
}

export type InstrumentRatingMappingWithRelations = InstrumentRatingMapping & InstrumentRatingMappingRelations;
