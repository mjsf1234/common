import {belongsTo, model, property} from '@loopback/repository';
import {MutualFundDetails} from '.';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    plural: 'SystematicMethodSettings',
    postgresql: {tableName: 'systematic_method_setting'},
    foreignKeys: {
      fkidx_systematic_method_settings_mutual_fund_details_fk_id: {
        name: 'fkidx_systematic_method_settings_mutual_fund_details_fk_id',
        foreignKey: 'fk_id_mutual_fund_details',
        entityKey: 'id',
        entity: 'MutualFundDetails'
      }
    },
    hiddenProperties: []
  }
})
export class SystematicMethodSetting extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_installment_number', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  minInstallmentNumber?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_installment_number', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  maxInstallmentNumber?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sip_min_gap', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  sipMinimumGap?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'sip_max_gap', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  sipMaximumGap?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'multiplier', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  multiplier?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'min_installment_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  minInstallmentAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_installment_amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  maxInstallmentAmount?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'dates', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  dates?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SYSTEMATICMETHODFREQUENCY',
    postgresql: {columnName: 'frequency', dataType: 'INT', nullable: 'Y'}
  })
  frequency?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'transaction_mode', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y'}
  })
  transactionMode?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SYSTEMATICMETHODTYPE',
    postgresql: {columnName: 'systematic_method_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  systematicMethodType?: number;

  /*@property({
    type: 'number',
    optionLabelIdentifier: 'WEEKLYSYSTEMATICBYDATEDAY',
    postgresql: {columnName: 'weekly_systematic_by_date_day', dataType: 'SMALLINT', nullable: 'Y'}
  })
  weeklySystematicByDateDay?: number;*/

  @belongsTo(
    () => MutualFundDetails,
    {
      name: 'mutualFundDetails',
      keyFrom: 'mutualFundDetailsId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_mutual_fund_details', dataType: 'INT', nullable: 'Y'}
    }
  )
  mutualFundDetailsId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SystematicMethodSetting>) {
    super(data);
  }
}

export interface SystematicMethodSettingRelations {
  // describe navigational properties here
}

export type SystematicMethodSettingWithRelations = SystematicMethodSetting & SystematicMethodSettingRelations;
