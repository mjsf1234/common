import {belongsTo, model, property} from '@loopback/repository';
import {Address, BaseSQLModel, Relationship} from '..';
import {Bank} from './bank.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'bank_branch'},
    plural: 'BankBranches',
    foreignKeys: {
      fkidx_bank_branch_bank_fk_id_bank: {
        name: 'fkidx_bank_branch_bank_fk_id_bank',
        foreignKey: 'fk_id_bank',
        entityKey: 'id',
        entity: 'Bank'
      },
      fkidx_bank_branch_address_fk_id_address: {
        name: 'fkidx_bank_branch_address_fk_id_address',
        foreignKey: 'fk_id_address',
        entityKey: 'id',
        entity: 'Address'
      }
    },
    hiddenProperties: ['fk_id_bank', 'fk_id_address'],
    indexes: {
      idx_ifsc_code: {keys: {ifsc_code: 1}, options: {unique: true, caseInsensitiveUnique: true}},
      idx_branch_name: {keys: {branch_name: 1}, options: {unique: true, caseInsensitiveUnique: true}},

    }
  }
})
export class BankBranch extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'branch_name', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  branchName?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'ifsc_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'N'}
  })
  ifscCode: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'micr_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  micrCode?: string;

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

  @belongsTo(
    () => Bank,
    {
      name: 'bank',
      keyFrom: 'bankId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_bank', dataType: 'INT', nullable: 'Y'}
    }
  )
  bankId: number;

  //@todo - keep local address table
  // @property({
  //   type: 'number'
  // })
  // fk_id_address?: number;
  //
  @belongsTo(
    () => Address,
    {
      name: 'address',
      keyFrom: 'addressId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_address', dataType: 'INT', nullable: 'Y'}
    }
  )
  addressId: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<BankBranch>) {
    super(data);
  }
}

export interface BankBranchRelations {
  // describe navigational properties here
}

export type BankBranchWithRelations = BankBranch & BankBranchRelations;
