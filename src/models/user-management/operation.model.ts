import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, AppUser} from '..';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'operation'},
    plural: 'Operations'
  }
})
export class Operation extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'employee_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  employeeCode?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'APPUSERCATEGORY',
    postgresql: {columnName: 'category', dataType: 'SMALLINT', nullable: 'N'}
  })
  category: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'birth_date', dataType: 'DATE', nullable: 'Y'}
  })
  birthDate?: Date;

  @property({
    type: 'number',
    optionLabelIdentifier: 'USERTYPE',
    postgresql: {columnName: 'user_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  userType?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_allowed_login_attempts', dataType: 'SMALLINT', nullable: 'Y'}
  })
  maxAllowedLoginAttempts?: number;



  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  appUserId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Operation>) {
    super(data);
  }
}

export interface OperationRelations {
  // describe navigational properties here
}

export type OperationWithRelations = Operation & OperationRelations;
