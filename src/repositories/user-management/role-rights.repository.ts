import {BaseLocalRepository} from '..';
import {juggler} from '@loopback/repository';
import {RoleRights, RoleRightsRelations} from '../../models';

export class RoleRightsRepository extends BaseLocalRepository<
RoleRights,
  typeof RoleRights.prototype.id,
  RoleRightsRelations
> {
  constructor(dataSource: juggler.DataSource) {
    super(RoleRights, dataSource);
  }
}
