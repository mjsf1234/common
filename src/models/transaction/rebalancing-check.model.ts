import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, Account, Goal} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'rebalancing_check'},
    plural: 'RebalancingChecks',
    foreignKeys: {
      fkidx_rebalancing_check_account_fk_id_account: {
        name: 'fkidx_rebalancing_check_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_rebalancing_check_goal_fk_id_goal: {
        name: 'fkidx_rebalancing_check_goal_fk_id_goal',
        foreignKey: 'fk_id_goal',
        entityKey: 'id',
        entity: 'Goal'
      }
    },
    hiddenProperties: []
  }
})
export class RebalancingCheck extends BaseSQLModel {

  @property({
    type: 'number',
    optionLabelIdentifier: 'REBALANCINGWEEKDAYCHECK',
    postgresql: {columnName: 'weekday_check', dataType: 'SMALLINT', nullable: 'Y'}
  })
  weekdayCheck?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'last_checked_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  lastCheckedDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'consecutive_weeks_positive', dataType: 'INT', nullable: 'Y'}
  })
  consecutiveWeeksPositive?: number;

  @property({
    type: 'object',
    default: [],
    postgresql: {columnName: 'check_data', dataType: 'TEXT', nullable: 'Y'}
  })
  checkData?: object;

  @property({
    type: 'date',
    postgresql: {columnName: 'alert_generated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  alertGeneratedDate?: Date;

  @property({
    type: 'object',
    default: [],
    postgresql: {columnName: 'alert_data', dataType: 'TEXT', nullable: 'Y'}
  })
  alertData?: object;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_alert_active', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isAlertActive: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'has_action_started', dataType: 'BOOLEAN', nullable: 'N'}
  })
  hasActionStarted: boolean;

  @property({
    type: 'date',
    postgresql: {columnName: 'last_action_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  lastActionDate?: Date;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'N'}
    }
  )
  accountId: number;

  @belongsTo(
    () => Goal,
    {
      name: 'goal',
      keyFrom: 'goalId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_goal', dataType: 'INT', nullable: 'Y'}
    }
  )
  goalId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<RebalancingCheck>) {
    super(data);
  }
}

export interface RebalancingCheckRelations {
  // describe navigational properties here
}

export type RebalancingCheckWithRelations = RebalancingCheck & RebalancingCheckRelations;
