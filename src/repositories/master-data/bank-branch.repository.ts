import {AddressRepository, BaseLocalRepository, RelationshipRepository} from '../../repositories';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Address, Bank, BankBranch, BankBranchRelations, Relationship} from '../../models';
import {BankRepository} from './bank.repository';

export class BankBranchRepository extends BaseLocalRepository<BankBranch, typeof BankBranch.prototype.id, BankBranchRelations> {
  public readonly bank: BelongsToAccessor<Bank, typeof BankBranch.prototype.id>;
  public readonly address: BelongsToAccessor<Address, typeof BankBranch.prototype.id>;
  public readonly relationshipNomineeGuardian: BelongsToAccessor<Relationship, typeof BankBranch.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('BankRepository') bankRepositoryGetter: Getter<BankRepository>,
    @repository.getter('AddressRepository') addressRepositoryGetter: Getter<AddressRepository>
  ) {
    super(BankBranch, dataSource);
    this.bank = this.createBelongsToAccessorFor('bank', bankRepositoryGetter);
    this.address = this.createBelongsToAccessorFor('address', addressRepositoryGetter);

    this.registerInclusionResolver('bank', this.bank.inclusionResolver);
    this.registerInclusionResolver('address', this.address.inclusionResolver);
  }
}
