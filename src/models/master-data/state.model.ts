import {belongsTo, hasMany, model, property} from '@loopback/repository';
import {Address, BaseSQLModel} from '..';
import {Country} from './country.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      // idx_cams_code: {keys: {cams_code: 1}, options: {unique: true, caseInsensitiveUnique: true}},
      // idx_fatca_code: {keys: {fatca_code: 1}, options: {unique: true, caseInsensitiveUnique: true}},
      // idx_karvy_code: {keys: {karvy_code: 1}, options: {unique: true, caseInsensitiveUnique: true}},
      idx_name_is_active_status_fk_id_co: {
        keys: {is_active: 1, name: 1, fk_id_country: 1},
        options: {unique: true, caseInsensitiveUnique: true}
      }
    },
    postgresql: {tableName: 'state'},
    plural: 'States',
    foreignKeys: {
      fkidx_state_country_fk_id_country: {
        name: 'fkidx_state_country_fk_id_country',
        foreignKey: 'fk_id_country',
        entityKey: 'id',
        entity: 'Country'
      }
    },
    hiddenProperties: []
  }
})
export class State extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  name: string;

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

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code_for_fatca', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bseCodeForFatca?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'cvl_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  cvlCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'cams_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  camsCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'fatca_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  fatcaCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'short_name', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  shortName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'state_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  stateCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'map_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  mapCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'karvy_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  karvyCode?: string;

  @belongsTo(
    () => Country,
    {
      name: 'country',
      keyFrom: 'countryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_country', dataType: 'INT', nullable: 'Y'}
    }
  )
  countryId?: number;

  @hasMany(() => Address, {keyTo: 'addressId'})
  addresses?: Address[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<State>) {
    super(data);
  }
}

export interface StateRelations {
  // describe navigational properties here
}

export type StateWithRelations = State & StateRelations;
