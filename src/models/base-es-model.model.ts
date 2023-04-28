import {model, property} from '@loopback/repository';
import {BaseModel} from './base-model.model';

@model({settings: {strict: false}})
export class BaseESModel extends BaseModel {
  @property({
    type: 'boolean',
    required: false,
    default: true,
    es: {type: 'boolean'}
  })
  isActive?: boolean;

  @property({
    type: 'date',
    required: false,
    es: {type: 'date'}
  })
  createdDate?: Date;

  @property({
    type: 'date',
    required: false,
    es: {type: 'date'}
  })
  lastModifiedDate?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BaseESModel>) {
    super(data);
  }
}

export interface BaseESModelRelations {
  // describe navigational properties here
}

export type BaseESModelWithRelations = BaseESModel & BaseESModelRelations;
