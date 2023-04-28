import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    plural: 'AppRoles',
    postgresql: {tableName: 'role'}
  }
})
export class AppRole extends BaseSQLModel {
  @property({
    type: 'number',
    id: 1,
    generated: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppRole>) {
    super(data);
  }
}

export interface AppRoleRelations {
  // describe navigational properties here
}

export type AppRoleWithRelations = AppRole & AppRoleRelations;
