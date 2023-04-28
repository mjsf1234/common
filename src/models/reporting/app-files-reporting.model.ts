import {model, property} from '@loopback/repository';
import {BaseESModel} from '../base-es-model.model';

@model({
  settings: {
    strict: false,
    plural: 'AppFilesReportings',
    indexes: {},
    elasticsearch: {index: 'appfilesreporting', type: 'appfile'},
    hiddenProperties: []
  }
})
export class AppFilesReporting extends BaseESModel {
  @property({
    type: 'number',
    es: {type: 'long'}
  })
  id?: number;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  appFileId?: number;

  @property({
    type: 'date',
    es: {type: 'date'}
  })
  uploadDate?: Date;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  path: string;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  containerName: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  checksum?: string;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  originalFileName: string;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  name: string;

  @property({
    type: 'number',
    required: true,
    es: {type: 'double'}
  })
  size: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  extension?: string;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  mimeType: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  accountId?: number;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  accountName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  accountUniqueId?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  accountNumbers?: string;

  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  appUserName: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  appUserId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  appUserCode?: string;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  appUserEmail?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  bankAccountId?: number;

  @property({
    type: 'string',
    required: true,
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  bankAccountName: string;

  @property({
    type: 'string',
    isPseudonym: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  bankAccountNumber?: string;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  bankName: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  orderId?: number;

  @property({
    type: 'date',
    required: true,
    es: {type: 'date'}
  })
  orderDate: Date;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  bankBranchIfscCode: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  serviceRequestDocumentType?: number;

  @property({
    type: 'string',
    required: true,
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  serviceRequestDocumentComment: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  bankAccountComment?: string;

  @property({
    type: 'number',
    es: {type: 'long'}
  })
  bankAccountCommentedByUserId?: number;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  bankAccountCommentedByUserName?: string;

  @property({
    type: 'string',
    es: {type: 'text', fields: {keyword: {type: 'keyword', ignore_above: 256}}}
  })
  rtaName?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AppFilesReporting>) {
    super(data);
  }
}

export interface AppFilesReportingRelations {
  // describe navigational properties here
}

export type AppFilesReportingWithRelations = AppFilesReporting & AppFilesReportingRelations;
