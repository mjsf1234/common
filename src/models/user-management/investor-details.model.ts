import {belongsTo, model, property} from '@loopback/repository';
import {
  Address,
  UserManagementAppFile,
  AppUser,
  BaseSQLModel,
  Country,
  IdentificationType,
  IncomeSlab,
  InvestorCategory,
  InvestorType,
  Occupation,
  OverseesAddress,
  PoliticallyExposureType,
  WealthSource,
  State
} from '..';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_pan_card_number: {keys: {pan_card_number: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'investor_details'},
    plural: 'InvestorDetails',
    foreignKeys: {
      fkidx_investor_details_user_fk_id_user: {
        name: 'fkidx_investor_details_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      },
      fkidx_investor_details_permanent_address_fk_id_permanent_ddress: {
        name: 'fkidx_investor_details_permanent_address_fk_id_permanent_ddress',
        foreignKey: 'fk_id_permanent_address',
        entityKey: 'id',
        entity: 'Address'
      },
      fkidx_investor_details_corres_address_fk_id_corres_address: {
        name: 'fkidx_investor_details_corres_address_fk_id_corres_address',
        foreignKey: 'fk_id_correspondence_address',
        entityKey: 'id',
        entity: 'Address'
      },
      fkidx_investor_details_oversees_add_fk_id_oversees_add: {
        name: 'fkidx_investor_details_oversees_add_fk_id_oversees_add',
        foreignKey: 'fk_id_oversees_address',
        entityKey: 'id',
        entity: 'OverseesAddress'
      },
      fkidx_investor_details_sig_img_file_fk_id_sig_img_file: {
        name: 'fkidx_investor_details_sig_img_file_fk_id_sig_img_file',
        foreignKey: 'fk_id_signature_image_file',
        entityKey: 'id',
        entity: 'AppFile'
      }
    },
    hiddenProperties: []
  }
})
export class InvestorDetails extends BaseSQLModel {
  @property({
    type: 'date',
    postgresql: {columnName: 'birth_date', dataType: 'DATE', nullable: 'Y'}
  })
  birthDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'next_birth_day', dataType: 'DATE', nullable: 'Y'}
  })
  nextBirthDay?: Date;

  @property({
    type: 'number',
    optionLabelIdentifier: 'GENDER',
    postgresql: {columnName: 'gender', dataType: 'SMALLINT', nullable: 'Y'}
  })
  gender?: number;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'pan_card_number', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y'}
  })
  panCardNumber?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'identification_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  identificationNumber?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'identification_number_2', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  identificationNumber2?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'identification_number_3', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  identificationNumber3?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'identification_number_4', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  identificationNumber4?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'KYCSTATUS',
    postgresql: {columnName: 'kyc_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  kycStatus?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'FATCAREGISTRATIONSTATUS',
    postgresql: {columnName: 'fatca_registration_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  fatcaRegistrationStatus?: number;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @property({
    type: 'number',
    default: 1,
    optionLabelIdentifier: 'REGISTRATIONSTEP',
    postgresql: {columnName: 'registration_step', dataType: 'SMALLINT', nullable: 'Y'}
  })
  registrationStep?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'agreement_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  agreementDate?: Date;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'tan_card_number', dataType: 'VARCHAR', dataLength: 10, nullable: 'Y'}
  })
  tanCardNumber?: string;

  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'is_transaction_allowed', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isTransactionAllowed: boolean;

  @property({
    type: 'boolean',
    required: true,
    default: true,
    postgresql: {columnName: 'is_aml_certified', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isAmlCertified: boolean;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_minor', dataType: 'BOOLEAN', nullable: 'N'}
  })
  isMinor?: boolean;

  @property({
    type: 'string',
    postgresql: {columnName: 'birth_city', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  birthCity?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'father_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  fatherName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'mother_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  motherName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'spouse_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  spouseName?: string | null;

  @property({
    type: 'number',
    optionLabelIdentifier: 'MARITALSTATUS',
    postgresql: {columnName: 'marital_status', dataType: 'SMALLINT', nullable: 'Y'}
  })
  maritalStatus?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'employer_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  employerName?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'employerr_category', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  employerCategory?: string;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'is_kyc_done', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isKYCDone?: boolean;

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

  @belongsTo(
    () => InvestorCategory,
    {
      name: 'investorCategory',
      keyFrom: 'investorCategoryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_investor_category', dataType: 'INT', nullable: 'Y'}
    }
  )
  investorCategoryId?: number;

  @belongsTo(
    () => WealthSource,
    {
      name: 'wealthSource',
      keyFrom: 'wealthSourceId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_wealth_source', dataType: 'INT', nullable: 'Y'}
    }
  )
  wealthSourceId?: number;

  @belongsTo(
    () => Occupation,
    {
      name: 'occupation',
      keyFrom: 'occupationId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_occupation', dataType: 'INT', nullable: 'Y'}
    }
  )
  occupationId?: number;

  @belongsTo(
    () => IncomeSlab,
    {
      name: 'incomeSlab',
      keyFrom: 'incomeSlabId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_income_slab', dataType: 'INT', nullable: 'Y'}
    }
  )
  incomeSlabId?: number;

  @belongsTo(
    () => IdentificationType,
    {
      name: 'identificationType',
      keyFrom: 'identificationTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_identification_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  identificationTypeId?: number;

  @belongsTo(
    () => IdentificationType,
    {
      name: 'identificationType2',
      keyFrom: 'identificationTypeId2',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_identification_type_2', dataType: 'INT', nullable: 'Y'}
    }
  )
  identificationTypeId2?: number;

  @belongsTo(
    () => IdentificationType,
    {
      name: 'identificationType3',
      keyFrom: 'identificationTypeId3',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_identification_type_3', dataType: 'INT', nullable: 'Y'}
    }
  )
  identificationTypeId3?: number;

  @belongsTo(
    () => IdentificationType,
    {
      name: 'identificationType4',
      keyFrom: 'identificationTypeId4',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_identification_type_4', dataType: 'INT', nullable: 'Y'}
    }
  )
  identificationTypeId4?: number;

  @belongsTo(
    () => InvestorType,
    {
      name: 'investorType',
      keyFrom: 'investorTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_investor_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  investorTypeId?: number;

  @belongsTo(
    () => Address,
    {
      name: 'permanentAddress',
      keyFrom: 'permanentAddressId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_permanent_address', dataType: 'INT', nullable: 'Y'}
    }
  )
  permanentAddressId?: number;

  @belongsTo(
    () => Address,
    {
      name: 'correspondenceAddress',
      keyFrom: 'correspondenceAddressId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_correspondence_address', dataType: 'INT', nullable: 'Y'}
    }
  )
  correspondenceAddressId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'panImageFile',
      keyFrom: 'panImageFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_pan_image_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  panImageFileId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'kycImageFile',
      keyFrom: 'kycImageFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_kyc_image_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  kycImageFileId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'relationshipDocumentImageFile',
      keyFrom: 'relationshipDocumentImageFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_rel_document_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  relationshipDocumentImageFileId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'signatureImageFile',
      keyFrom: 'signatureImageFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_signature_image_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  signatureImageFileId?: number;

  @belongsTo(
    () => Country,
    {
      name: 'countryOfBirth',
      keyFrom: 'countryOfBirthId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_country_of_birth', dataType: 'INT', nullable: 'Y'}
    }
  )
  countryOfBirthId?: number;

  @belongsTo(
    () => State,
    {
      name: 'stateOfBirth',
      keyFrom: 'stateOfBirthId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_state_of_birth', dataType: 'INT', nullable: 'Y'}
    }
  )
  stateOfBirthId?: number;

  @belongsTo(
    () => Country,
    {
      name: 'taxResidentCountry',
      keyFrom: 'taxResidentCountryId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_tax_resident_country', dataType: 'INT', nullable: 'Y'}
    }
  )
  taxResidentCountryId?: number;

  @belongsTo(
    () => Country,
    {
      name: 'taxResidentCountry2',
      keyFrom: 'taxResidentCountryId2',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_tax_resident_country_2', dataType: 'INT', nullable: 'Y'}
    }
  )
  taxResidentCountryId2?: number;

  @belongsTo(
    () => Country,
    {
      name: 'taxResidentCountry3',
      keyFrom: 'taxResidentCountryId3',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_tax_resident_country_3', dataType: 'INT', nullable: 'Y'}
    }
  )
  taxResidentCountryId3?: number;

  @belongsTo(
    () => Country,
    {
      name: 'taxResidentCountry4',
      keyFrom: 'taxResidentCountryId4',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_tax_resident_country_4', dataType: 'INT', nullable: 'Y'}
    }
  )
  taxResidentCountryId4?: number;

  @belongsTo(
    () => PoliticallyExposureType,
    {
      name: 'politicallyExposureType',
      keyFrom: 'politicallyExposureTypeId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_politically_exposure_type', dataType: 'INT', nullable: 'Y'}
    }
  )
  politicallyExposureTypeId?: number;

  @belongsTo(
    () => OverseesAddress,
    {
      name: 'overseesAddress',
      keyFrom: 'overseesAddressId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_oversees_address', dataType: 'INT', nullable: 'Y'}
    }
  )
  overseesAddressId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'correspondenceAddressProofFile',
      keyFrom: 'correspondenceAddressProofFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_correspondence_address_proof_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  correspondenceAddressProofFileId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'permanentAddressProofFile',
      keyFrom: 'permanentAddressProofFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_permanent_address_proof_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  permanentAddressProofFileId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'identityProofFile',
      keyFrom: 'identityProofFileId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_identity_proof_file', dataType: 'INT', nullable: 'Y'}
    }
  )
  identityProofFileId?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InvestorDetails>) {
    super(data);
  }
}

export interface InvestorDetailsRelations {
  // describe navigational properties here
}

export type InvestorDetailsWithRelations = InvestorDetails & InvestorDetailsRelations;
