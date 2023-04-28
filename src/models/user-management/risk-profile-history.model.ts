import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, RiskProfileQuestion, RiskProfileQuestionPossibleAnswer, RiskProfile} from '..';
import {Account} from './account.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'risk_profile_history'},
    plural: 'RiskProfileHistories',
    foreignKeys: {
      fkidx_risk_profile_history_account_fk_id_account: {
        name: 'fkidx_risk_profile_history_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_risk_profile_history_fk_id_risk_profile: {
        name: 'fkidx_risk_profile_history_fk_id_risk_profile',
        foreignKey: 'fk_id_risk_profile',
        entityKey: 'id',
        entity: 'RiskProfile'
      }
    },
    hiddenProperties: []
  }
})
export class RiskProfileHistory extends BaseSQLModel {
  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'is_submitted', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isSubmitted: boolean;

  @property({
    type: 'date',
    required: true,
    ignoreAuditLog: true,
    postgresql: {columnName: 'effective_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  effectiveDate: Date;

  @property({
    type: 'string',
    postgresql: {columnName: 'risk_profile_data', dataType: 'TEXT', nullable: 'Y'}
  })
  riskProfileData?: string;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  accountId: number;

  @belongsTo(
    () => RiskProfile,
    {
      name: 'riskProfile',
      keyFrom: 'riskProfileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'Y'}
    }
  )
  riskProfileId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RiskProfileHistory>) {
    super(data);
  }
}

export interface RiskProfileHistoryRelations {
  // describe navigational properties here
}

export type RiskProfileHistoryWithRelations = RiskProfileHistory & RiskProfileHistoryRelations;
