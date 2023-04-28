import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_effective_date: {keys: {effective_date: -1}, options: {unique: false}},
      idx_effective_date_active_fk_id_parent_instrument: {
        keys: {effective_date: -1, is_active: 1, fk_id_parent_instrument: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'instrument_holding'},
    plural: 'InstrumentHoldings',
    foreignKeys: {
      fkidx_instrument_holding_fk_id_parent_instrument: {
        name: 'fkidx_instrument_holding_fk_id_parent_instrument',
        foreignKey: 'fk_id_parent_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_instrument_holding_fk_id_child_instrument: {
        name: 'fkidx_instrument_holding_fk_id_child_instrument',
        foreignKey: 'fk_id_child_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: []
  }
})
export class InstrumentHolding extends BaseSQLModel {
  @property({
    type: 'number',
    default: 100,
    required: true,
    postgresql: {columnName: 'percentage', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 30, dataScale: 20}
  })
  percentage: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  effectiveDate?: Date;

  @belongsTo(
    () => Instrument,
    {
      name: 'parentInstrument',
      keyFrom: 'parentInstrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_parent_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  parentInstrumentId: number;

  @belongsTo(
    () => Instrument,
    {
      name: 'childInstrument',
      keyFrom: 'childInstrumentId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_child_instrument', dataType: 'INT', nullable: 'Y'}
    }
  )
  childInstrumentId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstrumentHolding>) {
    super(data);
  }
}

export interface InstrumentHoldingRelations {
  // describe navigational properties here
}

export type InstrumentHoldingWithRelations = InstrumentHolding & InstrumentHoldingRelations;
