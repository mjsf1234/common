import {belongsTo, model, property, hasMany} from '@loopback/repository';
import {BaseSQLModel, SystematicMethod} from '..';


@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'systematic_method_status_history'},
    plural: 'SystematicMethodStatusHistories'
  }
})
export class SystematicMethodStatusHistory extends BaseSQLModel {
  @property({
    type: 'number',
    postgresql: {columnName: 'previous _frequency_day', dataType: 'INT', nullable: 'Y'}
  })
  previousFrequencyDay?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'frequency_day_changed_to', dataType: 'INT', nullable: 'Y'}
  })
  frequencyDayChangedTo?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SYSTEMATICMETHODSTATUS',
    postgresql: {columnName: 'previous _status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  previousStatus?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SYSTEMATICMETHODSTATUS',
    postgresql: {columnName: 'status_changed_to', dataType: 'SMALLINT', nullable: 'Y'}
  })
  statusChangedTo?: number;

  @belongsTo(
    () => SystematicMethod,
    {
      name: 'systematicMethod',
      keyFrom: 'systematicMethodId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_systematic_method', dataType: 'INT', nullable: 'N'}
    }
  )
  systematicMethodId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SystematicMethodStatusHistory>) {
    super(data);
  }
}

export interface SystematicMethodStatusHistoryRelations {
  // describe navigational properties here
}

export type SystematicMethodStatusHistoryWithRelations = SystematicMethodStatusHistory & SystematicMethodStatusHistoryRelations;
