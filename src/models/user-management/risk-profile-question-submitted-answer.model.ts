import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, RiskProfileQuestion, RiskProfileQuestionPossibleAnswer} from '..';
import {Account} from './account.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'risk_profile_question_submitted_answer'},
    plural: 'RiskProfileQuestionSubmittedAnswers',
    foreignKeys: {
      fkidx_risk_profile_ques_submtd_ans_ques_fk_id_ques: {
        name: 'fkidx_risk_profile_ques_submtd_ans_ques_fk_id_ques',
        foreignKey: 'fk_id_risk_profile_question',
        entityKey: 'id',
        entity: 'RiskProfileQuestion'
      },
      fkidx_risk_profile_ques_submtd_ans_ans_fk_id_ans: {
        name: 'fkidx_risk_profile_ques_submtd_ans_ans_fk_id_ans',
        foreignKey: 'fk_id_risk_profile_question_possible_answer',
        entityKey: 'id',
        entity: 'RiskProfileQuestionPossibleAnswer'
      },
      fkidx_risk_profile_ques_submtd_ans_account_fk_id_account: {
        name: 'fkidx_risk_profile_ques_submtd_ans_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      }
    },
    hiddenProperties: []
  }
})
export class RiskProfileQuestionSubmittedAnswer extends BaseSQLModel {
  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'submitted', dataType: 'BOOLEAN', nullable: 'N'}
  })
  submitted: boolean;

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

  @belongsTo(
    () => RiskProfileQuestionPossibleAnswer,
    {
      name: 'riskProfileQuestionPossibleAnswer',
      keyFrom: 'riskProfileQuestionPossibleAnswerId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_risk_profile_question_possible_answer', dataType: 'INT', nullable: 'Y'}
    }
  )
  riskProfileQuestionPossibleAnswerId: number;

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

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RiskProfileQuestionSubmittedAnswer>) {
    super(data);
  }
}

export interface RiskProfileQuestionSubmittedAnswerRelations {
  // describe navigational properties here
}

export type RiskProfileQuestionSubmittedAnswerWithRelations = RiskProfileQuestionSubmittedAnswer &
  RiskProfileQuestionSubmittedAnswerRelations;
