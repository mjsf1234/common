import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {Instrument} from './instrument.model';
import {SectorClassification} from './sector-classification.model';
import {Sector} from './sector.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_instrument_sector_mapping_instrument_name: {
        keys: {fk_id_instrument: 1, fk_id_sector: 1, fk_id_sector_classification: 1},
        options: {unique: false}
      }
    },
    postgresql: {tableName: 'instrument_sector_mapping'},
    plural: 'InstrumentSectorMappings',
    foreignKeys: {
      fkidx_instrument_sector_mapping_fk_id_instrument: {
        name: 'fkidx_instrument_sector_mapping_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_instrument_sector_mapping_fk_id_sector: {
        name: 'fkidx_instrument_sector_mapping_fk_id_sector',
        foreignKey: 'fk_id_sector',
        entityKey: 'id',
        entity: 'Sector'
      },
      fkidx_instrument_sector_mapping_fk_id_sector_classification: {
        name: 'fkidx_instrument_sector_mapping_fk_id_sector_classification',
        foreignKey: 'fk_id_sector_classification',
        entityKey: 'id',
        entity: 'SectorClassification'
      }
    },
    hiddenProperties: []
  }
})
export class InstrumentSectorMapping extends BaseSQLModel {
  @property({
    type: 'number',
    default: 100,
    required: true,
    postgresql: {columnName: 'percentage', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  percentage: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

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
    () => Sector,
    {
      name: 'sector',
      keyFrom: 'sectorId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_sector', dataType: 'INT', nullable: 'Y'}
    }
  )
  sectorId: number;

  @belongsTo(
    () => SectorClassification,
    {
      name: 'sectorClassificaion',
      keyFrom: 'sectorClassificaionId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_sector_classification', dataType: 'INT', nullable: 'Y'}
    }
  )
  sectorClassificationId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InstrumentSectorMapping>) {
    super(data);
  }
}

export interface InstrumentSectorMappingRelations {
  // describe navigational properties here
}

export type InstrumentSectorMappingWithRelations = InstrumentSectorMapping & InstrumentSectorMappingRelations;
