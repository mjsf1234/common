import {belongsTo, hasMany, hasOne, model, property} from '@loopback/repository';
import {Account, BaseSQLModel, GoalCategory} from '..';
import {Holding, RebalancingCheck} from '../transaction';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'goal'},
    plural: 'Goals',
    foreignKeys: {
      fkidx_goal_account_fk_id_account: {
        name: 'fkidx_goal_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      }
    },
    hiddenProperties: ['fk_id_account']
  }
})
export class Goal extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'unique_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  uniqueId?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'GOALTYPE',
    postgresql: {columnName: 'type', dataType: 'SMALLINT', nullable: 'N'}
  })
  type: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  startDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  endDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'target_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  targetAmount?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'expected_corpus', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  expectedCorpus?: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @belongsTo(
    () => GoalCategory,
    {
      name: 'goalCategory',
      keyFrom: 'goalCategoryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_goal_category', dataType: 'INT', nullable: 'Y'}
    }
  )
  goalCategoryId?: number;

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

  @hasMany(() => Holding, {keyTo: 'goalId'})
  holdings?: Holding[];

  @hasOne(() => RebalancingCheck, {keyTo: 'goalId'})
  rebalancingCheck?: RebalancingCheck;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Goal>) {
    super(data);
  }
}

export interface GoalRelations {
  // describe navigational properties here
}

export type GoalWithRelations = Goal & GoalRelations;
