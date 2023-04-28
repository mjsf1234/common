import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {RiskProfileQuestion} from './risk-profile-question.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'risk_profile_question_possible_answer'},
    plural: 'RiskProfileQuestionPossibleAnswers',
    foreignKeys: {
      fkidx_risk_profile_ques_poss_ans_ques_fk_id_ques: {
        name: 'fkidx_risk_profile_ques_poss_ans_ques_fk_id_ques',
        foreignKey: 'fk_id_risk_profile_question',
        entityKey: 'id',
        entity: 'RiskProfileQuestion'
      }
    },
    forceId: false,
    hiddenProperties: ['fk_id_risk_profile_question'],
    indexes: {
      idx_risk_profile_answer: {keys: {answer: 1}, options: {unique: true, caseInsensitiveUnique: true}}
    }
  }
})
export class RiskProfileQuestionPossibleAnswer extends BaseSQLModel {
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
    postgresql: {columnName: 'answer', dataType: 'TEXT', nullable: 'N'}
  })
  answer: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'score', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 25, dataScale: 10},
    jsonSchema:{
      minimum: 0,
      maximum: 100
    }
  })
  score: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @belongsTo(
    () => RiskProfileQuestion,
    {
      name: 'riskProfileQuestion',
      keyFrom: 'riskProfileQuestionId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_risk_profile_question', dataType: 'INT', nullable: 'Y'}
    }
  )
  riskProfileQuestionId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RiskProfileQuestionPossibleAnswer>) {
    super(data);
  }
}

export interface RiskProfileQuestionPossibleAnswerRelations {
  // describe navigational properties here
}

export type RiskProfileQuestionPossibleAnswerWithRelations = RiskProfileQuestionPossibleAnswer & RiskProfileQuestionPossibleAnswerRelations;
