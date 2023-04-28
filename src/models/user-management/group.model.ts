import {hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {FamilyRepository} from '../../repositories';
import {Family} from './family.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'group'},
    plural: 'Groups',
    foreignKeys: {}
  }
})
export class Group extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'group_head', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  groupHead?: string;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @property({
    type: 'number',
    required: true,
    default: 1,
    optionLabelIdentifier: 'STATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status: number;

  @hasMany(() => Family, {keyTo: 'groupId'})
  families?: Family[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Group>) {
    super(data);
  }
}

export interface GroupRelations {
  // describe navigational properties here
}

export type GroupWithRelations = Group & GroupRelations;
