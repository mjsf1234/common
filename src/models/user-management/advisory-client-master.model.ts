import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_advisory_client_master_customerId: {keys: {customerId: 1}, options: {unique: true}}
    },
    postgresql: {tableName: 'advisory_client_master'},
    plural: 'AdvisoryClientsMaster',
  }
})
export class AdvisoryClientMaster extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'customerId', dataType: 'TEXT', nullable: 'N'}
    
  })
  customerId: string;

  @property({
    type: 'number',
    postgresql: {columnName: 'customer_flag', dataType: 'INT', nullable: 'Y'},
    optionLabelIdentifier: 'ADVISORYCUSTOMERFLAG',
  })
  customerFlag?: number;


  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AdvisoryClientMaster>) {
    super(data);
  }
}

export interface AdvisoryClientMasterRelations {
  // describe navigational properties here
}

export type AdvisoryClientMasterWithRelations = AdvisoryClientMaster & AdvisoryClientMasterRelations;
