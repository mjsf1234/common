import {belongsTo, model, property} from '@loopback/repository';
import {AppUser, BaseSQLModel, Holding, Instrument, RtaHolding, ServiceProvider, ServiceProviderAccount} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'rta_holding_reconciliation'},
    plural: 'RTAHoldingReconciliations',
    foreignKeys: {
      fkidx_rta_holding_reconciliation_rta_holding_fk_id_rta_holding: {
        name: 'fkidx_rta_holding_reconciliation_rta_holding_fk_id_rta_holding',
        foreignKey: 'fk_id_rta_holding',
        entityKey: 'id',
        entity: 'RTAHolding'
      },
      fkidx_rta_holding_reconciliation_instrument_fk_id_instrument: {
        name: 'fkidx_rta_holding_reconciliation_instrument_fk_id_instrument',
        foreignKey: 'fk_id_instrument',
        entityKey: 'id',
        entity: 'Instrument'
      },
      fkidx_rta_holding_reconciliation_spa_fk_id_spa: {
        name: 'fkidx_rta_holding_reconciliation_spa_fk_id_spa',
        foreignKey: 'fk_id_service_provider_account',
        entityKey: 'id',
        entity: 'ServiceProviderAccount'
      },
      fkidx_rta_holding_reconciliation_sp_fk_id_sp: {
        name: 'fkidx_rta_holding_reconciliation_sp_fk_id_sp',
        foreignKey: 'fk_id_service_provider',
        entityKey: 'id',
        entity: 'ServiceProvider'
      },
      fkidx_rta_holding_reconciliation_user_fk_id_user: {
        name: 'fkidx_rta_holding_reconciliation_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_rta_holding_reconciliation_holding_fk_id_holding: {
        name: 'fkidx_rta_holding_reconciliation_holding_fk_id_holding',
        foreignKey: 'fk_id_holding',
        entityKey: 'id',
        entity: 'Holding'
      }
    },
    hiddenProperties: []
  }
})
export class RtaHoldingReconciliation extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'RTAHOLDINGRECONCILIATIONSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'rta_holding_unique_hash', dataType: 'VARCHAR', dataLength: 1000, nullable: 'N'}
  })
  rtaHoldingUniqueHash: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  serviceProviderCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'service_provider_account_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  serviceProviderAccountNumber?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'instrument_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  instrumentCode?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'holding_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  holdingDate?: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'isin_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  isinCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'instrument_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  instrumentName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'investor_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  investorName?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  pricePerUnit?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'system_price_per_unit', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  systenPricePerUnit?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'system_quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  systemQuantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'quantity', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  quantity?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'system_current_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  systemCurrentValue?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'current_value', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  currentValue?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'broker_code', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  brokerCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'pan', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  pan?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'reinvestment_flag', dataType: 'VARCHAR', nullable: 'Y', dataLength: 255}
  })
  reinvestmentFlag?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'system_nav_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  systemNavDate?: Date;

  @belongsTo(
    () => RtaHolding,
    {
      name: 'rtaHolding',
      keyFrom: 'rtaHoldingId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rta_holding', dataType: 'INT', nullable: 'Y'}
    }
  )
  rtaHoldingId: number;

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
  instrumentId?: number;

  @belongsTo(
    () => ServiceProvider,
    {
      name: 'serviceProvider',
      keyFrom: 'serviceProviderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_service_provider', dataType: 'INT', nullable: 'Y'}
    }
  )
  serviceProviderId?: number;

  @belongsTo(
    () => ServiceProviderAccount,
    {
      name: 'serviceProviderAccount',
      keyFrom: 'serviceProviderAccountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_service_provider_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  serviceProviderAccountId?: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'uploadedByAppUser',
      keyFrom: 'uploadedByAppUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_uploaded_by_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  uploadedByAppUserId?: number;

  @belongsTo(
    () => Holding,
    {
      name: 'holding',
      keyFrom: 'holdingId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_holding', dataType: 'INT', nullable: 'Y'}
    }
  )
  holdingId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RtaHoldingReconciliation>) {
    super(data);
  }
}

export interface RtaHoldingReconciliationRelations {
  // describe navigational properties here
}

export type RtaHoldingReconciliationWithRelations = RtaHoldingReconciliation & RtaHoldingReconciliationRelations;
