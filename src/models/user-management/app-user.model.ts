import {belongsTo, hasMany, hasOne, model, property} from '@loopback/repository';
import {CommunicationMatrix, Operation} from '.';
import {UserManagementAppFile, BaseSQLModel, Family, FamilyMapping, InvestorNominee} from '..';
import {CasRequest} from '../transaction/cas-request.model';
import {Account} from './account.model';
import {Alert} from './alert.model';
import {AppAccessToken} from './app-access-token.model';
import {AppRole} from './app-role.model';
import {AppUserRoleMapping} from './app-user-role-mapping.model';
import {Feedback} from './feedback.model';
import {IdcomDetails} from './idcom-details.model';
import {InvestorDetails} from './investor-details.model';
import {MpinHistory} from './mpin-history.model';
import {UserNotificationToken} from './user-notification-token.model';

@model({
  settings: {
    strict: false,
    indexes: {
      idx_is_active: {keys: {is_active: 1}, options: {unique: false}},
      idx_created_date: {keys: {created_date: 1}, options: {unique: false}},
      idx_last_modified_date: {keys: {last_modified_date: 1}, options: {unique: false}},
      idx_user_code: {keys: {user_code: 1}, options: {unique: true}},
      idx_name: {keys: {name: 1}, options: {unique: false}},
      idx_email: {keys: {email: 1}, options: {unique: false}},
      idx_contact_number: {keys: {contact_number: 1}, options: {unique: false}}
    },
    postgresql: {tableName: 'user'},
    plural: 'AppUsers',
    foreignKeys: {
      fkidx_app_user_family_fk_id_family: {
        name: 'fkidx_app_user_family_fk_id_family',
        foreignKey: 'fk_id_family',
        entityKey: 'id',
        entity: 'Family'
      },
      fkidx_user_file_fk_id_file_profile_picture: {
        name: 'fkidx_user_file_fk_id_file_profile_picture',
        foreignKey: 'fk_id_file_profile_picture',
        entityKey: 'id',
        entity: 'AppFile'
      }
    },
    hiddenProperties: ['password', 'oneTimePassword', 'passwordExpiry', 'loginRetryCount', 'otp', 'otp_expiry', 'mpin']
  }
})
export class AppUser extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    postgresql: {columnName: 'name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  name: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  email?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'EMAILCONTACTBELONGSTO',
    postgresql: {columnName: 'email_belongs_to', dataType: 'SMALLINT', nullable: 'Y'}
  })
  emailBelongsTo?: number | null;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'updated_email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  updatedEmail?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'updated_contact_number', dataType: 'VARCHAR', dataLength: 14, nullable: 'Y'}
  })
  updatedContactNumber?: string;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'updated_details_flag', dataType: 'BOOLEAN', nullable: 'N'}
  })
  updatedDetailsFlag: boolean;

  // @property({
  //   type: 'number',
  //   optionLabelIdentifier: 'PANAADHARLINKSTATUS',
  //   postgresql: {columnName: 'pan_aadhar_link_status', dataType: 'SMALLINT', nullable: 'Y'}
  // })
  // panAadharLinkStatus?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'GENDER',
    postgresql: {columnName: 'gender', dataType: 'SMALLINT', nullable: 'Y'}
  })
  gender?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'SALUTATION',
    postgresql: {columnName: 'salutation', dataType: 'SMALLINT', nullable: 'Y'}
  })
  salutation?: number;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  userCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'password', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  password?: string;

  @property({
    type: 'date',
    postgresql: {columnName: 'password_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  passwordExpiry?: Date;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'otp_retry_count', dataType: 'INT', nullable: 'Y'}
  })
  otpRetryCount?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'otp_verification_count', dataType: 'INT', nullable: 'Y'}
  })
  otpVerificationCount?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'otp_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  otpExpiry?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'otp_generation', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  otpGeneration?: Date;

  @property({
    type: 'number',
    required: true,
    default: 0,
    postgresql: {columnName: 'login_retry_count', dataType: 'INT', nullable: 'N'}
  })
  loginRetryCount: number;

  @property({
    type: 'string',
    default: '+91',
    postgresql: {columnName: 'contact_number_country_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  contactNumberCountryCode?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  contactNumber?: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'EMAILCONTACTBELONGSTO',
    postgresql: {columnName: 'contact_number_belongs_to', dataType: 'SMALLINT', nullable: 'Y'}
  })
  contactNumberBelongsTo?: number | null;

  @property({
    type: 'date',
    postgresql: {columnName: 'last_login_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  lastLoginDate?: Date;

  @property({
    type: 'object',
    default: {},
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: object;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'APPUSERSTATUS',
    postgresql: {columnName: 'app_user_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  appUserStatus: number;

  @property({
    type: 'boolean',
    required: true,
    default: false,
    postgresql: {columnName: 'force_password_change', dataType: 'BOOLEAN', nullable: 'N'}
  })
  forcePasswordChange: boolean;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'tnc_acceptance_ip_address', dataType: 'TEXT', nullable: 'Y'}
  })
  tncAcceptanceIpAddress?: string;

  @property({
    type: 'boolean',
    default: false,
    postgresql: {columnName: 'force_tnc_acceptance_required', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  forceTNCAcceptanceRequired?: boolean;

  @property({
    type: 'date',
    postgresql: {columnName: 'force_tnc_acceptance_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  forceTNCAcceptanceDate?: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'mpin_reset_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  mpinResetDate?: Date;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'one_time_password', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  oneTimePassword?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'primary_source', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  primarySource?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'bos_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  bosCode?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'secondary_source', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  secondarySource?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'tertiary_source', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  tertiarySource?: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'mpin', dataType: 'VARCHAR', dataLength: 1000, nullable: 'Y'}
  })
  mpin?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'demat_acc_number', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  dematAccNumber?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'demat_dp_id', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  dematDpId?: string;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'mpin_setup', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  mpinSetup?: boolean;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_professional_details_updated', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  isProfessionalDetailsUpdated?: boolean;

  @belongsTo(
    () => Family,
    {
      name: 'family',
      keyFrom: 'familyId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_family', dataType: 'INT', nullable: 'Y'}
    }
  )
  familyId?: number;

  @belongsTo(
    () => UserManagementAppFile,
    {
      name: 'appFileProfilePicture',
      keyFrom: 'appFileProfilePictureId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_file_profile_picture', dataType: 'INT', nullable: 'Y'}
    }
  )
  appFileProfilePictureId?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'txn_otp_generation', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  txnOTPGeneration?: Date;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'txn_otp_retry_count', dataType: 'INT', nullable: 'Y'}
  })
  txnOTPRetryCount?: number;

  @property({
    type: 'number',
    default: 0,
    postgresql: {columnName: 'txn_otp_verification_count', dataType: 'INT', nullable: 'Y'}
  })
  txnOTPVerificationCount?: number;

  @property({
    type: 'date',
    postgresql: {columnName: 'txn_otp_expiry', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  txnOTPExpiry?: Date;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'otp_ref_no', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  otpRefNo?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    postgresql: {columnName: 'txn_otp_ref_no', dataType: 'VARCHAR', dataLength: 30, nullable: 'Y'}
  })
  txnOTPRefNo?: string;

  @hasOne(() => InvestorDetails, {keyTo: 'appUserId'})
  investorDetails?: InvestorDetails;

  @hasMany(() => AppRole, {
    through: {
      model: () => AppUserRoleMapping,
      keyFrom: 'appUserId',
      keyTo: 'appRoleId'
    }
  })
  appRoles: AppRole[];

  @property({
    type: 'object',
    required: false,
    default: {},
    postgresql: {columnName: 'remarks', dataType: 'TEXT', nullable: 'Y'}
  })
  remarks?: object;

  @hasMany(() => AppAccessToken, {keyTo: 'appUserId'})
  accessTokens?: AppAccessToken[];

  @hasMany(() => Account, {keyTo: 'primaryHolderId'})
  primaryAccounts?: Account[];

  @hasMany(() => FamilyMapping, {keyTo: 'parentId'})
  parentIds?: FamilyMapping[];

  @hasMany(() => FamilyMapping, {keyTo: 'childId'})
  childIds?: FamilyMapping[];

  @hasMany(() => Alert, {keyTo: 'appUserId'})
  alerts?: Alert[];

  @hasMany(() => Feedback, {keyTo: 'appUserId'})
  feedbacks?: Feedback[];

  @hasMany(() => CasRequest, {keyTo: 'appUserId'})
  casRequests?: CasRequest[];

  @hasMany(() => MpinHistory, {keyTo: 'appUserId'})
  mpinHistories?: MpinHistory[];

  @hasMany(() => IdcomDetails, {keyTo: 'appUserId'})
  idcomDetails?: IdcomDetails[];

  @hasMany(() => UserNotificationToken, {keyTo: 'appUserId'})
  userNotificationTokens?: UserNotificationToken[];

  @hasOne(() => Operation, {keyTo: 'appUserId'})
  operationDetails?: Operation;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppUser>) {
    super(data);
  }
}

export interface AppUserRelations {
  // describe navigational properties here
}

export type AppUserWithRelations = AppUser & AppUserRelations;
