import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false, validateUpsert: true, idInjection: true}})
export class BaseModel extends Entity {
  @property({
    type: 'number',
    id: 1,
    generated: true,
    updateOnly: true
  })
  id?: number;

  isActive?: boolean;

  createdDate?: Date;

  lastModifiedDate?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BaseModel>) {
    super(data);
  }
}

export interface BaseModelRelations {
  // describe navigational properties here
}

export type BaseModelWithRelations = BaseModel & BaseModelRelations;
