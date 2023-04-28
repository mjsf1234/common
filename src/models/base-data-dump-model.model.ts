import {model, property} from '@loopback/repository';
import {BaseModel} from './base-model.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}}
    }
  }
})
export class BaseDataDumpModel extends BaseModel {
  @property({
    type: 'boolean',
    required: false,
    default: true,
    postgresql: {columnName: 'is_active', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isActive?: boolean;

  @property({
    type: 'date',
    required: false,
    ignoreAuditLog: true,
    postgresql: {columnName: 'created_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  createdDate?: Date;

  @property({
    type: 'date',
    required: false,
    ignoreAuditLog: true,
    postgresql: {columnName: 'last_modified_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  lastModifiedDate?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BaseDataDumpModel>) {
    super(data);
  }
}

export interface BaseDataDumpModelRelations {
  // describe navigational properties here
}

export type BaseDataDumpModelWithRelations = BaseDataDumpModel & BaseDataDumpModelRelations;
