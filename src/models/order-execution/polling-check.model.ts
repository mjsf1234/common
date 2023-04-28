import {belongsTo, model, property} from '@loopback/repository';
import {Account, BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'polling_check'},
    plural: 'PollingChecks',
    foreignKeys: {
      fkidx_polling_check_account_fk_id_account: {
        name: 'fkidx_polling_check_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      }
    },
    hiddenProperties: ['fk_id_account']
  }
})
export class PollingCheck extends BaseSQLModel {

  @property({
    type: 'string',
    postgresql: {columnName: 'activity_name', dataType: 'VARCHAR', nullable: 'Y', dataLength: 120}
  })
  activityName?: string;

  @property({
    type: 'number',
    required: true,
    deafult: 1,
    optionLabelIdentifier: 'POLLINGSTATUS',
    postgresql: {columnName: 'activity_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  activityStatus: number;

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

  constructor(data?: Partial<PollingCheck>) {
    super(data);
  }
}

export interface PollingCheckRelations {
  // describe navigational properties here
}

export type PollingCheckWithRelations = PollingCheck & PollingCheckRelations;
