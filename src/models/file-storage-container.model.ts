import {Entity, model, property} from '@loopback/repository';

@model()
export class FileStorageContainer extends Entity {
  @property({
    type: 'string',
    required: true
  })
  name: string;

  constructor(data?: Partial<FileStorageContainer>) {
    super(data);
  }
}
