import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel, MandateType} from '..';
import {Account} from './account.model';
import {UserManagementAppFile} from './user-management-app-file.model';
import {BankAccount} from './bank-account.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'mandate'},
    plural: 'Mandates',
    foreignKeys: {
      fkidx_mandate_bank_account_fk_id_bank_account: {
        name: 'fkidx_mandate_bank_account_fk_id_bank_account',
        foreignKey: 'fk_id_bank_account',
        entityKey: 'id',
        entity: 'BankAccount'
      },
      fkidx_mandate_account_fk_id_account: {
        name: 'fkidx_mandate_account_fk_id_account',
        foreignKey: 'fk_id_account',
        entityKey: 'id',
        entity: 'Account'
      },
      fkidx_mandate_mandate_type_fk_id_mandate_type: {
        name: 'fkidx_mandate_mandate_type_fk_id_mandate_type',
        foreignKey: 'fk_id_mandate_type',
        entityKey: 'id',
        entity: 'MandateType'
      },
      fkidx_mandate_app_file_fk_id_app_file: {
        name: 'fkidx_mandate_app_file_fk_id_app_file',
        foreignKey: 'fk_id_app_file',
        entityKey: 'id',
        entity: 'AppFile'
      }
    },
    hiddenProperties: []
  }
})
export class Mandate extends BaseSQLModel {
  @property({
    type: 'string',
    postgresql: {columnName: 'umrn', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  umrn?: string;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'start_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  startDate: Date;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'end_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  endDate: Date;

  @property({
    type: 'number',
    required: true,
    postgresql: {columnName: 'amount', dataType: 'NUMERIC', nullable: 'N', dataPrecision: 15, dataScale: 3}
  })
  amount: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'available_amount', dataType: 'NUMERIC', nullable: 'Y', dataPrecision: 25, dataScale: 10}
  })
  availableAmount?: number;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'MANDATESTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  status: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'reference_id', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  referenceId?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'approved_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  approvedDate?: Date;

  @property({
    type: 'number',
    postgresql: {columnName: 'until_cancelled', dataType: 'SMALLINT', nullable: 'Y'}
  })
  untilCancelled?: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'meta', dataType: 'TEXT', nullable: 'Y'}
  })
  meta?: object;

  @belongsTo(
    () => BankAccount,
    {
      name: 'bankAccount',
      keyFrom: 'bankAccountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_bank_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  bankAccountId: number;

  @belongsTo(
    () => Account,
    {
      name: 'account',
      keyFrom: 'accountId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account', dataType: 'INT', nullable: 'Y'}
    }
  )
  accountId: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'userManagementAppFile',
      keyFrom: 'userManagementAppFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  userManagementAppFileId?: number;

  @belongsTo(
    () => MandateType,
    {
      name: 'mandateType',
      keyFrom: 'mandateTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_mandate_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  mandateTypeId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mandate>) {
    super(data);
  }
}

export interface MandateRelations {
  // describe navigational properties here
}

export type MandateWithRelations = Mandate & MandateRelations;
