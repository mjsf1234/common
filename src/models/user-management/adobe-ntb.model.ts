import {belongsTo, model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';
import {AppUser} from '..';

@model({
  settings: {
    strict: false,
    forceId: false,
    plural: 'AdobeJourneyNtbUsers',
    postgresql: {tableName: 'adobe_journey_ntb_user'},
    foreignKeys: {
      fkidx_adobe_ntb_user_fk_id_user: {
        name: 'fkidx_adobe_ntb_user_fk_id_user',
        foreignKey: 'fk_id_user',
        entityKey: 'id',
        entity: 'AppUser'
      }
    }
  }
})
export class AdobeNtbUser extends BaseSQLModel {

  @property({
    type: 'number',
    required:true,
    postgresql: {columnName: 'mobile_number', dataType: 'NUMERIC', dataPrecision: 25, nullable: 'N'}
  })
  mobileNumber?: number;

  @property({
    type: 'date',
    required:true,
    postgresql: {columnName: 'dob', dataType: 'DATE', nullable: 'Y'}
  })
  dob?: Date;

  @property({
    type: 'number',
    required:true,
    postgresql: {columnName: 'crm_lead_no', dataType: 'NUMERIC', dataPrecision: 25, nullable: 'N'}
  })
  crmLeadNo?: number;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'adobe_journey_id', dataType: 'VARCHAR', dataLength: 200, nullable: 'N'}
  })
  adobeJourneyId: string;

  @property({
    type: 'number',
    required:true,
    optionLabelIdentifier: 'ACCOUNTSTATUS',
    postgresql: {columnName: 'account_status', dataType: 'SMALLINT', nullable: 'N'}
  })
  accountStatus: number;


  @property({
    type: 'string',
    postgresql: {columnName: 'user_defined_field_1', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y'}
  })
  userDefinedField1: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_defined_field_2', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y'}
  })
  userDefinedField2: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_defined_field_3', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y'}
  })
  userDefinedField3: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_defined_field_4', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y'}
  })
  userDefinedField4: string;

  @property({
    type: 'string',
    postgresql: {columnName: 'user_defined_field_5', dataType: 'VARCHAR', dataLength: 200, nullable: 'Y'}
  })
  userDefinedField5: string;

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
  // [prop: string]: any;

  constructor(data?: Partial<AdobeNtbUser>) {
    super(data);
  }
}

export interface AdobeNtbUserRelations {
  // describe navigational properties here
}

export type AdobeNtbWithRelations = AdobeNtbUser & AdobeNtbUserRelations;
