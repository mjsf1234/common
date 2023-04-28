import {hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {RiskProfileQuestionPossibleAnswer} from './risk-profile-question-possible-answer.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'risk_profile_question'},
    plural: 'RiskProfileQuestions',
    foreignKeys: {},
    hiddenProperties: [],
    forceId: false,
    indexes: {
      idx_risk_profile_question: {keys: {question: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    }
  }
})
export class RiskProfileQuestion extends BaseSQLModel {
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
    postgresql: {columnName: 'question', dataType: 'TEXT', nullable: 'N'}
  })
  question: string;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'RISKPROFILEQUESTIONTYPE',
    postgresql: {columnName: 'type', dataType: 'SMALLINT', nullable: 'N'}
  })
  type: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @hasMany(() => RiskProfileQuestionPossibleAnswer, {keyTo: 'riskProfileQuestionId'})
  possibleAnswers?: RiskProfileQuestionPossibleAnswer[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RiskProfileQuestion>) {
    super(data);
  }
}

export interface RiskProfileQuestionRelations {
  // describe navigational properties here
}

export type RiskProfileQuestionWithRelations = RiskProfileQuestion & RiskProfileQuestionRelations;
