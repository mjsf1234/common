import {hasMany, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {BankBranch} from './bank-branch.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'bank'},
    plural: 'Banks',
    indexes: {idx_bank_name: {keys: {name: 1}, options: {unique: true, caseInsensitiveUnique: true}}},
    hiddenProperties: []
  }
})
export class Bank extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'description', dataType: 'TEXT', nullable: 'Y'}
  })
  description?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  nseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'logo_blob_url', dataType: 'TEXT', nullable: 'Y'}
  })
  logoBlobUrl?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bank_url', dataType: 'TEXT', nullable: 'Y'}
  })
  bankUrl?: string;

  @hasMany(() => BankBranch, {keyTo: 'bankId'})
  bankBranches?: BankBranch[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Bank>) {
    super(data);
  }
}

export interface BankRelations {
  // describe navigational properties here
}

export type BankWithRelations = Bank & BankRelations;
