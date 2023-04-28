import {belongsTo, model, property} from '@loopback/repository';
//import { Asset } from '.';
import {BaseSQLModel} from '..';
import { RiskProfile } from './risk-profile.model';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'investment_return_projection'},
    plural: 'InvestmentReturnProjections',
    foreignKeys: {
      fkidx_investment_return_projection_risk_profile_fk_id_risk_profile: {
        name: 'fkidx_investment_return_projection_risk_profile_fk_id_risk_profile',
        foreignKey: 'fk_id_risk_profile',
        entityKey: 'id',
        entity: 'RiskProfile'
      }      
    },
    hiddenProperties: []
  }
})
export class InvestmentReturnProjection extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'goal_tenure_months', dataType: 'INT', nullable: 'N'}
  })
  goalTenureMonths: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'months_post_investment', dataType: 'INT', nullable: 'N'}
  })
  monthsPostInvestment: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'upside_of_10k', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  upsideOf10k: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'downside_of_10k', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  downsideOf10k: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'expected_of_10k', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  expectedOf10k: number;  


  @belongsTo(
    () => RiskProfile,
    {
      name: 'riskProfile',
      keyFrom: 'riskProfileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'N'}
    }
  )
  riskProfileId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InvestmentReturnProjection>) {
    super(data);
  }
}

export interface InvestmentReturnProjectionRelations {
  // describe navigational properties here
}

export type InvestmentReturnProjectionWithRelations = InvestmentReturnProjection & InvestmentReturnProjectionRelations;
