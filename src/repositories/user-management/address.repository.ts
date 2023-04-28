import {BaseLocalRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Address, AddressRelations, AddressType, State} from '../../models';
import {AddressTypeRepository, StateRepository} from '../master-data';

export class AddressRepository extends BaseLocalRepository<Address, typeof Address.prototype.id, AddressRelations> {
  public readonly addressType: BelongsToAccessor<AddressType, typeof Address.prototype.id>;
  public readonly state: BelongsToAccessor<State, typeof Address.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AddressTypeRepository') addressTypeRepositoryGetter: Getter<AddressTypeRepository>,
    @repository.getter('StateRepository') stateRepositoryGetter: Getter<StateRepository>
  ) {
    super(Address, dataSource);
    this.addressType = this.createBelongsToAccessorFor('addressType', addressTypeRepositoryGetter);
    this.state = this.createBelongsToAccessorFor('state', stateRepositoryGetter);

    this.registerInclusionResolver('addressType', this.addressType.inclusionResolver);
    this.registerInclusionResolver('state', this.state.inclusionResolver);
  }
}
