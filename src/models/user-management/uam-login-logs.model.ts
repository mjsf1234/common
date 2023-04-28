import {model, property, belongsTo} from '@loopback/repository';
import {BaseSQLModel} from '..';
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'uam_login_logs'},
    plural: 'UamLoginLogs'
  }
})
export class UamLoginLogs extends BaseSQLModel {


  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'user_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  userId: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'employee_code', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  employeeCode: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'employee_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  employeeName: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'login_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  loginDate: Date;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'login_time', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  loginTime: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'logout_time', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  logoutTime: string;

  @property({
    type: 'string',
    required: true,
    default : "WEALTHAPP",
    postgresql: {columnName: 'application_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  applicationName?: string;

  @property({
    type: 'string',
    required: true,
    default : "WEALTHAPP",
    postgresql: {columnName: 'ip_address', dataType: 'TEXT', nullable: 'N'}
  })
  ipAddress?: string;

  @property({
    type: 'string',
    required: true,
    default : "NOT AVAILABLE",
    postgresql: {columnName: 'asset_details', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  assetDetails?: string;

  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'token', dataType: 'VARCHAR', dataLength: 64, nullable: 'N'}
  })
  token: string;



  constructor(data?: Partial<UamLoginLogs>) {
    super(data);
  }
}

export interface UamLoginLogsRelations {

}

export type UamLoginLogsWithRelations = UamLoginLogs & UamLoginLogsRelations
