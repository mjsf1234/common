import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {AppRole, AppRoleRelations} from '../../models';

export class AppRoleRepository extends BaseLocalRepository<AppRole, typeof AppRole.prototype.id, AppRoleRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(AppRole, dataSource);
  }
}
