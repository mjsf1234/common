import {hasOne, model} from '@loopback/repository';
import {InvestorDetails} from '..';
import {BaseAppFileModel} from '..';
import {ServiceRequestDocument} from './service-request-document.model';
import {AccountAppFileMapping, BankAccount, CsrFatca, InstrumentsExportFile} from '.';
@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'user_management_file'},
    plural: 'UserManagementAppFiles'
  }
})
export class UserManagementAppFile extends BaseAppFileModel {
  @hasOne(() => InvestorDetails, {keyTo: 'signatureImageFileId'})
  investorDetailsForSignature?: InvestorDetails;

  @hasOne(() => ServiceRequestDocument, {keyTo: 'appFileId'})
  serviceRequestDocument?: ServiceRequestDocument;

  @hasOne(() => BankAccount, {keyTo: 'chequeImageFileId'})
  bankAccount?: BankAccount;

  @hasOne(() => CsrFatca, {keyTo: 'userManagementappFileId'})
  csrFatca?: CsrFatca;

  @hasOne(() => AccountAppFileMapping, {keyTo: 'appFileId'})
  accountAppFileMapping?: AccountAppFileMapping;

  @hasOne(() => InstrumentsExportFile, {keyTo: 'userManagementAppFileId'})
  instrumentsExportFile?: InstrumentsExportFile;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserManagementAppFile>) {
    super(data);
  }
}

export interface UserManagementAppFileRelations {
  // describe navigational properties here
}

export type UserManagementAppFileWithRelations = UserManagementAppFile & UserManagementAppFileRelations;
