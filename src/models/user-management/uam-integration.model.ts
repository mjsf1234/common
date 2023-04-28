import {model, property, belongsTo} from '@loopback/repository';
import {AppUser, BaseSQLModel} from '..';
@model({
  settings: {
    strict: false,
    indexes: {
      idx_activity: {
        keys: {
          activity: 1
        },
        options: {
          unique: false
        }
      },
      idx_is_latest: {
        keys: {
          is_latest: 1
        },
        options: {
          unique: false
        }
      },
      idx_fk_id_app_user: {
        keys: {
          fk_id_app_user: 1
        },
        options: {
          unique: false
        }
      }
    },
    postgresql: {tableName: 'uam_integration'},
    plural: 'uamIntegrations',
    foreignKeys: {
      fkidx_uam_integration_user_fk_id_app_user: {
        name: 'fkidx_uam_integration_user_fk_id_app_user',
        foreignKey: 'fk_id_app_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    }
  }
})
export class UamIntegration extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'user_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'N'}
  })
  userCode: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'user_name', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  userName: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'employee_code', dataType: 'VARCHAR', dataLength: 30, nullable: 'N'}
  })
  employeeCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'branch_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  branchCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'branch_name', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y'}
  })
  branchName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'department_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  departmentCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'department_name', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y'}
  })
  departmentName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'profile', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y'}
  })
  profile: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'status', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y'}
  })
  status: string;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'last_login_date', dataType: 'DATE', nullable: 'Y'}
  })
  lastLoginDate: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'activity', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  activity: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'sub_status', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  subStatus: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'sub_profile', dataType: 'VARCHAR', dataLength: 250, nullable: 'Y'}
  })
  subProfile: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'contact_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  contactNumber: string;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'USERTYPE',
    postgresql: {columnName: 'user_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  userType: number;

  @property({
    type: 'number',
    required: true,
    optionLabelIdentifier: 'APPUSERCATEGORY',
    postgresql: {columnName: 'category', dataType: 'SMALLINT', nullable: 'Y'}
  })
  category: number | null;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'reporting_manager_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  reportingManagerCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_contact_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  oldContactNumber: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_contact_number', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  newContactNumber: string;

  @property({
    type: 'number',
    required: false,
    postgresql: {columnName: 'old_user_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  oldUserType: number;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'USERTYPE',
    postgresql: {columnName: 'new_user_type', dataType: 'SMALLINT', nullable: 'Y'}
  })
  newUserType: number;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_employee_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  oldEmployeeName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_employee_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  newEmployeeName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_profile_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  oldProfileName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_profile_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  newProfileName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_branch_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  oldBranchName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_branch_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  newBranchName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_department_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  oldDepartmentName: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_department_name', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  newDepartmentName: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'last_modified_maker_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'N'}
  })
  lastModifiedMakerId: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'last_modified_checker_id', dataType: 'VARCHAR', dataLength: 100, nullable: 'Y'}
  })
  lastModifiedCheckerId: string | null;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'last_modified_maker_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  lastModifiedMakerDateTime: Date;

  @property({
    type: 'date',
    postgresql: {columnName: 'last_modified_checker_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  lastModifiedCheckerDateTime: Date | null;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'disable_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  disableDateTime: Date;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'deletion_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  deletionDateTime: Date;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'dormant_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  dormantDateTime: Date;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'creation_date_time', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'Y'}
  })
  creationDateTime: Date;

  @property({
    type: 'boolean',
    default: true,
    postgresql: {columnName: 'is_latest', dataType: 'Boolean', nullable: 'Y'}
  })
  isLatest: boolean;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  email: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  oldEmail: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_email', dataType: 'VARCHAR', dataLength: 255, nullable: 'Y'}
  })
  newEmail: string;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'SALUTATION',
    postgresql: {columnName: 'old_salutation', dataType: 'SMALLINT', nullable: 'Y'}
  })
  oldSalutation: number;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'SALUTATION',
    postgresql: {columnName: 'new_salutation', dataType: 'SMALLINT', nullable: 'Y'}
  })
  newSalutation: number;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'SALUTATION',
    postgresql: {columnName: 'salutation', dataType: 'SMALLINT', nullable: 'Y'}
  })
  salutation: number;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'dob', dataType: 'DATE', nullable: 'Y'}
  })
  dob?: Date | null;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'old_dob', dataType: 'DATE', nullable: 'Y'}
  })
  oldDob?: Date | null;

  @property({
    type: 'date',
    required: false,
    postgresql: {columnName: 'new_dob', dataType: 'DATE', nullable: 'Y'}
  })
  newDob?: Date | null;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'APPUSERCATEGORY',
    postgresql: {columnName: 'old_category', dataType: 'SMALLINT', nullable: 'Y'}
  })
  oldCategory: number;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'APPUSERCATEGORY',
    postgresql: {columnName: 'new_category', dataType: 'SMALLINT', nullable: 'Y'}
  })
  newCategory: number | null;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_department_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  oldDepartmentCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_department_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  newDepartmentCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_branch_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  oldBranchCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_branch_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  newBranchCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'old_reporting_manager_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  oldReportingManagerCode: string;

  @property({
    type: 'string',
    required: false,
    postgresql: {columnName: 'new_reporting_manager_code', dataType: 'VARCHAR', dataLength: 50, nullable: 'Y'}
  })
  newReportingManagerCode: string;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'GENDER',
    postgresql: {columnName: 'old_gender', dataType: 'SMALLINT', nullable: 'Y'}
  })
  oldGender: number;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'GENDER',
    postgresql: {columnName: 'new_gender', dataType: 'SMALLINT', nullable: 'Y'}
  })
  newGender: number;

  @property({
    type: 'number',
    required: false,
    optionLabelIdentifier: 'GENDER',
    postgresql: {columnName: 'gender', dataType: 'SMALLINT', nullable: 'Y'}
  })
  gender: number;

  @property({
    type: 'number',
    postgresql: {columnName: 'max_allowed_login_attempts', dataType: 'SMALLINT', nullable: 'Y'}
  })
  maxAllowedLoginAttempts?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'enabled_from_dormancy_recently', dataType: 'BOOLEAN', nullable: 'Y'}
  })
  enabledFromDormancyRecently?: boolean | null

  @belongsTo(
    () => AppUser,
    {
      name: 'appUser',
      keyFrom: 'appUserId',
      keyTo: 'id'
    },
    {
      postgresql: {columnName: 'fk_id_app_user', dataType: 'INT', nullable: 'Y'}
    }
  )
  appUserId: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UamIntegration>) {
    super(data);
  }
}

export interface UamIntegrationRelations {
  // describe navigational properties here
}

export type UamIntegrationWithRelations = UamIntegration & UamIntegrationRelations;
