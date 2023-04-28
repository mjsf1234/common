import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {
  SystematicMethod,
  SystematicMethodStatusHistory,
  SystematicMethodStatusHistoryRelations
} from '../../models';
import { SystematicMethodRepository } from '.';

export class SystematicMethodStatusHistoryRepository extends BaseLocalRepository<
SystematicMethodStatusHistory,
  typeof SystematicMethodStatusHistory.prototype.id,
  SystematicMethodStatusHistoryRelations
> {
  public readonly systematicMethod: BelongsToAccessor<SystematicMethod, typeof SystematicMethodStatusHistory.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('SystematicMethodRepository') systematicMethodRepositoryGetter: Getter<SystematicMethodRepository>,
  ) {
    super(SystematicMethodStatusHistory, dataSource);
    this.systematicMethod = this.createBelongsToAccessorFor('systematicMethod', systematicMethodRepositoryGetter);

    this.registerInclusionResolver('systematicMethod', this.systematicMethod.inclusionResolver);
  }
}
