import {model, property} from '@loopback/repository';
import {BaseSQLModel} from '..';

@model({
  settings: {
    strict: false,
    indexes: {},
    postgresql: {tableName: 'app_version'},
    plural: 'AppVersions',
    foreignKeys: {},
    hiddenProperties: []
  }
})
export class AppVersion extends BaseSQLModel {
  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'current_app_version', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'},
  })
  currentAppVersion: string;

  @property({
    type: 'number',
    optionLabelIdentifier: 'OSTYPE',
    postgresql: {columnName: 'os_type', dataType: 'SMALLINT', nullable: 'N'}
  })
  osType?: number;

  @property({
    type: 'number',
    optionLabelIdentifier: 'VERSIONSTATUS',
    postgresql: {columnName: 'status', dataType: 'SMALLINT', nullable: 'N'}
  })
  status?: number;

  @property({
    type: 'boolean',
    postgresql: {columnName: 'is_force_update', dataType: 'BOOLEAN'}
  })
  isForceUpdate?: boolean;

  @property({
    type: 'string',
    required: true,
    postgresql: {columnName: 'build_number', dataType: 'VARCHAR', dataLength: 255, nullable: 'N'}
  })
  buildNumber: string;

  @property({
    type: 'any',
    postgresql: {columnName: 'config', dataType: 'TEXT', nullable: 'Y'}
  })
  config?: any;

  @property({
    type: 'date',
    required: true,
    postgresql: {columnName: 'release_date', dataType: 'TIMESTAMP WITH TIME ZONE', nullable: 'N'}
  })
  releaseDate: Date;

  @property({
    type: 'boolean',
    required: true,
    postgresql: {columnName: 'active_version_flag', dataType: 'BOOLEAN', nullable: 'N'}
  })
  activeVersionFlag: boolean;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppVersion>) {
    super(data);
  }
}

export interface AppVersionRelations {
  // describe navigational properties here
}

export type AppVersionWithRelations = AppVersion & AppVersionRelations;
