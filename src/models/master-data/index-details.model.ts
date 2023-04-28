import {belongsTo, model} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'index_details'},
    plural: 'IndexDetails',
    foreignKeys: {
      fkidx_index_details_instrument_fk_id_instrument: {
        name: 'fkidx_index_details_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: ['fk_id_instrument']
  }
})
export class IndexDetails extends BaseSQLModel {
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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<IndexDetails>) {
    super(data);
  }
}

export interface IndexDetailsRelations {
  // describe navigational properties here
}

export type IndexDetailsWithRelations = IndexDetails & IndexDetailsRelations;
