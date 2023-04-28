import {model, property, belongsTo} from '@loopback/repository';
import {BaseSQLModel} from '..';
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'uam_login_attempts'},
    plural: 'UamLoginAttemptsConfigs'
  }
})
export class UamLoginAttemptsConfig extends BaseSQLModel {
  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'max_login_attempts', dataType: 'SMALLINT', nullable: 'N'}
  })
  maxLoginAttempts: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_dormancy_days', dataType: 'SMALLINT', nullable: 'Y'}
  })
  maxDormancyDays?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_dormancy_days_before_first_login', dataType: 'SMALLINT', nullable: 'Y'}
  })
  maxDormancyDaysBeforeFirstLogin?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UamLoginAttemptsConfig>) {
    super(data);
  }
}

export interface UamLoginAttemptsConfigRelations {
  // describe navigational properties here
}

export type UamLoginAttemptsConfigWithRelations = UamLoginAttemptsConfig & UamLoginAttemptsConfigRelations
