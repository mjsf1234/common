import {hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel, ModelPortfolio, ModelPortfolioInstrument} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'risk_profile'},
    plural: 'RiskProfiles',
    foreignKeys: {},
    forceId: false,
    hiddenProperties: [],
    indexes: {
      idx_risk_profile_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    }
  }
})
export class RiskProfile extends BaseSQLModel {
  @property({
    type: 'number',
    required: false,
    id: true,
    postgresql: {columnName: 'id', type: 'number', nullable: 'N'}
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
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'svg', dataType: 'TEXT', nullable: 'Y'},
    jsonSchema: {
      pattern: '(?!.*?script)^.*$'
    }
  })
  svg?: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'min_score', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  minScore: number;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'max_score', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10}
  })
  maxScore: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @hasMany(() => ModelPortfolio, {keyTo: 'riskProfileId'})
  modelPortfolios?: ModelPortfolio[];

  @hasMany(() => ModelPortfolioInstrument, {keyTo: 'riskProfileId'})
  modelPortfolioInstruments?: ModelPortfolioInstrument[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RiskProfile>) {
    super(data);
  }
}

export interface RiskProfileRelations {
  // describe navigational properties here
}

export type RiskProfileWithRelations = RiskProfile & RiskProfileRelations;
