import { BaseLocalRepository, CsrFatcaRepository } from '../../repositories';
import { Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { CsrFatca, Rta, RtaRelations } from '../../models';
export declare class RtaRepository extends BaseLocalRepository<Rta, typeof Rta.prototype.id, RtaRelations> {
    readonly csrFatca: HasManyRepositoryFactory<CsrFatca, typeof Rta.prototype.id>;
    constructor(dataSource: juggler.DataSource, csrFatcaRepositoryGetter: Getter<CsrFatcaRepository>);
}
