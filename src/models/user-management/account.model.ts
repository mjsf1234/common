import {belongsTo, hasMany, hasOne, model, property} from '@loopback/repository';
import {
  AccountCategory,
  AppUser,
  BaseSQLModel,
  Distributor,
  HoldingType,
  Relationship,
  RiskProfile,
  InvestorNominee,
  CsrFatca,
  CommunicationMatrix
} from '..';
import {Cart, DepositDetails, Goal, Order, TransactionTwoFa} from '../order-execution';
import {ServiceProviderAccount} from '../transaction';
import {AccountAppFileMapping} from './account-app-file-mapping.model';
import {AccountReferral} from './account-referral.model';
import {BankAccount} from './bank-account.model';
import {RiskProfileQuestionSubmittedAnswer} from './risk-profile-question-submitted-answer.model';

@model({
  settings: {
    strict: false,
    postgresql: {tableName: 'account'},
    plural: 'Accounts',
    foreignKeys: {
      fkidx_account_user_fk_id_user_primary_holder: {
        name: 'fkidx_account_user_fk_id_user_primary_holder',
        foreignKey: 'fk_id_user_primary_holder',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_user_fk_id_user_secondary_holder: {
        name: 'fkidx_account_user_fk_id_user_secondary_holder',
        foreignKey: 'fk_id_user_secondary_holder',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_user_fk_id_user_tertiary_holder: {
        name: 'fkidx_account_user_fk_id_user_tertiary_holder',
        foreignKey: 'fk_id_user_tertiary_holder',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_user_fk_id_user_primary_nominee: {
        name: 'fkidx_account_user_fk_id_user_primary_nominee',
        foreignKey: 'fk_id_user_primary_nominee',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_user_fk_id_user_secondary_nominee: {
        name: 'fkidx_account_user_fk_id_user_secondary_nominee',
        foreignKey: 'fk_id_user_secondary_nominee',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_user_fk_id_user_tertiary_nominee: {
        name: 'fkidx_account_user_fk_id_user_tertiary_nominee',
        foreignKey: 'fk_id_user_tertiary_nominee',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_user_fk_id_user_guardian: {
        name: 'fkidx_account_user_fk_id_user_guardian',
        foreignKey: 'fk_id_user_guardian',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_relationship_fk_id_relationship_nominee_guardian: {
        name: 'fkidx_account_relationship_fk_id_relationship_nominee_guardian',
        foreignKey: 'fk_id_relationship_nominee_guardian',
        entityKey: 'id',
        entity: 'Relationship'
      }
      /* Commenting out as these are not needed
      fkidx_account_user_fk_id_first_nominee_guardian: {
        name: 'fkidx_account_user_fk_id_first_nominee_guardian',
        foreignKey: 'fk_id_first_nominee_guardian',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_user_fk_id_second_nominee_guardian: {
        name: 'fkidx_account_user_fk_id_second_nominee_guardian',
        foreignKey: 'fk_id_second_nominee_guardian',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_account_user_fk_id_third_nominee_guardian: {
        name: 'fkidx_account_user_fk_id_third_nominee_guardian',
        foreignKey: 'fk_id_third_nominee_guardian',
        entityKey: 'id',
        entity: 'AppUser'
      }
      */
    },
    hiddenProperties: []
  }
})
export class Account extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'},
    orcale: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'uniqueId', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  uniqueId?: string;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'ACCOUNTSTATUS',
    postgresql: {columnName: 'account_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  accountStatus: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'nse_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  nseCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bse_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  bseCode?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'skipped_nominee', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  skippedNominee?: boolean;
  @property({
    type: 'date',
    postgresql: {columnName: 'activation_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  activationDate?: Date;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_prospect', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isProspect: boolean;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'account_confirmation_pending', dataType: 'BOOLEAN', nullable: 'N'}
  })
  accountConfirmationPending: boolean;

  @property({
    type: 'number',
    default: 1,
    optionLabelIdentifier: 'REGISTRATIONSTEP',
    postgresql: {columnName: 'registration_step', dataType: 'SMALLINT', nullable: 'Y'}
  })
  registrationStep?: number;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_direct_transaction_allowed', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isDirectTransactionAllowed: boolean;

  @property({
    type: 'date',
    postgresql: {columnName: 'risk_profile_updation_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  riskProfileUpdateDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'blocked_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  blockedDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'unblocked_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  unblockedDate?: Date;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'is_poa_applicable', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isPoaApplicable: boolean;

  @property({
    type: 'number',
    postgresql: {columnName: 'primary_nominee_percentage', dataType: 'NUMERIC', dataPrecision: 25, dataScale: 10, nullable: 'Y'}
  })
  primaryNomineePercentage?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'secondary_nominee_percentage', dataType: 'NUMERIC', dataPrecision: 25, dataScale: 10, nullable: 'Y'}
  })
  secondaryNomineePercentage?: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'tertiary_nominee_percentage', dataType: 'NUMERIC', dataPrecision: 25, dataScale: 10, nullable: 'Y'}
  })
  tertiaryNomineePercentage?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'account_opening_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  accountOpeningDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'risk_profile_updated_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  riskProfileUpdatedDate?: Date;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_nominee_details_updated', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isNomineeDetailsUpdated?: boolean;

  @belongsTo(
    () => AppUser,
    {
      name: 'primaryHolder',
      keyFrom: 'primaryHolderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_primary_holder', dataType: 'INT', nullable: 'Y'}
    }
  )
  primaryHolderId: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'secondaryHolder',
      keyFrom: 'secondaryHolderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_secondary_holder', dataType: 'INT', nullable: 'Y'}
    }
  )
  secondaryHolderId?: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'tertiaryHolder',
      keyFrom: 'tertiaryHolderId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_tertiary_holder', dataType: 'INT', nullable: 'Y'}
    }
  )
  tertiaryHolderId?: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'primaryNominee',
      keyFrom: 'primaryNomineeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_primary_nominee', dataType: 'INT', nullable: 'Y'}
    }
  )
  primaryNomineeId?: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'secondaryNominee',
      keyFrom: 'secondaryNomineeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_secondary_nominee', dataType: 'INT', nullable: 'Y'}
    }
  )
  secondaryNomineeId?: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'tertiaryNominee',
      keyFrom: 'tertiaryNomineeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_tertiary_nominee', dataType: 'INT', nullable: 'Y'}
    }
  )
  tertiaryNomineeId?: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'guardian',
      keyFrom: 'guardianId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_guardian', dataType: 'INT', nullable: 'Y'}
    }
  )
  guardianId?: number;

  @belongsTo(
    () => RiskProfile,
    {
      name: 'riskProfile',
      keyFrom: 'riskProfileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_risk_profile', dataType: 'INT', nullable: 'Y'}
    }
  )
  riskProfileId?: number;

  @belongsTo(
    () => Relationship,
    {
      name: 'primaryNomineeRelationship',
      keyFrom: 'primaryNomineeRelationshipId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_relationship_primary_nominee', dataType: 'INT', nullable: 'Y'}
    }
  )
  primaryNomineeRelationshipId?: number;

  @belongsTo(
    () => Relationship,
    {
      name: 'secondaryNomineeRelationship',
      keyFrom: 'secondaryNomineeRelationshipId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_relationship_secondary_nominee', dataType: 'INT', nullable: 'Y'}
    }
  )
  secondaryNomineeRelationshipId?: number;

  @belongsTo(
    () => Relationship,
    {
      name: 'tertiaryNomineeRelationship',
      keyFrom: 'tertiaryNomineeRelationshipId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_relationship_tertiary_nominee', dataType: 'INT', nullable: 'Y'}
    }
  )
  tertiaryNomineeRelationshipId?: number;

  @belongsTo(
    () => Relationship,
    {
      name: 'guardianRelationship',
      keyFrom: 'guardianRelationshipId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_relationship_guardian', dataType: 'INT', nullable: 'Y'}
    }
  )
  guardianRelationshipId?: number;

  @belongsTo(
    () => Distributor,
    {
      name: 'distributor',
      keyFrom: 'distributorId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_distributor', dataType: 'INT', nullable: 'Y'}
    }
  )
  distributorId?: number;

  @belongsTo(
    () => HoldingType,
    {
      name: 'holdingType',
      keyFrom: 'holdingTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_holding_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  holdingTypeId?: number;

  @belongsTo(
    () => AccountCategory,
    {
      name: 'accountCategory',
      keyFrom: 'accountCategoryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_account_category', dataType: 'INT', nullable: 'Y'}
    }
  )
  accountCategoryId?: number;

  @belongsTo(
    () => Relationship,
    {
      name: 'nomineeGuardianRelationship',
      keyFrom: 'nomineeGuardianRelationshipId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_relationship_nominee_guardian', dataType: 'INT', nullable: 'Y'}
    }
  )
  nomineeGuardianRelationshipId?: number;

  @belongsTo(
    () => AppUser,
    {
      name: 'nomineeGuardian',
      keyFrom: 'nomineeGuardianId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_user_nominee_guardian', dataType: 'INT', nullable: 'Y'}
    }
  )
  nomineeGuardianId?: number;

  @hasOne(() => Cart, {keyTo: 'accountId'})
  cart?: Cart;

  @hasMany(() => ServiceProviderAccount, {keyTo: 'accountId'})
  serviceProviderAccounts?: ServiceProviderAccount[];

  @hasMany(() => Goal, {keyTo: 'accountId'})
  goals?: Goal[];

  @hasMany(() => BankAccount, {keyTo: 'accountId'})
  bankAccounts?: BankAccount[];

  @hasMany(() => RiskProfileQuestionSubmittedAnswer, {keyTo: 'accountId'})
  riskProfileQuestionSubmittedAnswers?: RiskProfileQuestionSubmittedAnswer[];

  @hasMany(() => InvestorNominee, {keyTo: 'accountId'})
  investorNominees?: InvestorNominee[];

  @hasMany(() => Order, {keyTo: 'accountId'})
  orders?: Order[];

  @hasMany(() => DepositDetails, {keyTo: 'accountId'})
  depositDetails?: DepositDetails[];

  @hasOne(() => AccountReferral, {keyTo: 'accountId'})
  accountReferral?: AccountReferral;

  @hasMany(() => CsrFatca, {keyTo: 'accountId'})
  csrFatca?: CsrFatca[];

  @hasMany(() => AccountAppFileMapping, {keyTo: 'accountId'})
  accountAppFileMapping?: AccountAppFileMapping[];

  @hasMany(() => CommunicationMatrix, {keyTo: 'accountId'})
  communicationMatrix?: CommunicationMatrix[];

  @hasMany(() => TransactionTwoFa, {keyTo: 'accountId'})
  transactionTwoFa?: TransactionTwoFa[];
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Account>) {
    super(data);
  }
}

export interface AccountRelations {
  // describe navigational properties here
}

export type AccountWithRelations = Account & AccountRelations;
