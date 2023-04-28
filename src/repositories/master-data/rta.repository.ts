import {BaseLocalRepository, CsrFatcaRepository} from '../../repositories';
import {Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {CsrFatca, Rta, RtaRelations} from '../../models';

export class RtaRepository extends BaseLocalRepository<Rta, typeof Rta.prototype.id, RtaRelations> {
  public readonly csrFatca: HasManyRepositoryFactory<CsrFatca, typeof Rta.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('CsrFatcaRepository') csrFatcaRepositoryGetter: Getter<CsrFatcaRepository>
  ) {
    super(Rta, dataSource);

    this.csrFatca = this.createHasManyRepositoryFactoryFor('csrFatca', csrFatcaRepositoryGetter);
    this.registerInclusionResolver('csrFatca', this.csrFatca.inclusionResolver);
  }
}
