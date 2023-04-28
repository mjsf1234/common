import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'bond_details'},
    plural: 'BondDetails',
    foreignKeys: {
      fkidx_bond_details_instrument_fk_id_instrument: {
        name: 'fkidx_bond_details_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      }
    },
    hiddenProperties: ['fk_id_instrument']
  }
})
export class BondDetails extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'frequency', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  frequency?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'gsec_code', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  gsecCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'securities', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  securities?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'type', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  type?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'coupon', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  coupon?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'face_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 40, dataScale: 20}
  })
  faceValue?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'issue_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  issueDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'maturity_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  maturityDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'put_call_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  putCallDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'paid_up_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  paidUpValue?: number;

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

  constructor(data?: Partial<BondDetails>) {
    super(data);
  }
}

export interface BondDetailsRelations {
  // describe navigational properties here
}

export type BondDetailsWithRelations = BondDetails & BondDetailsRelations;
