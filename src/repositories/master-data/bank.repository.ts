import {BaseLocalRepository} from '../../repositories';
import {Getter, HasManyRepositoryFactory, juggler, repository} from '@loopback/repository';
import {Bank, BankBranch, BankRelations} from '../../models';
import {BankBranchRepository} from './bank-branch.repository';

export class BankRepository extends BaseLocalRepository<Bank, typeof Bank.prototype.id, BankRelations> {
  public readonly bankBranches: HasManyRepositoryFactory<BankBranch, typeof Bank.prototype.id>;

  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('BankBranchRepository') bankBranchRepositoryGetter: Getter<BankBranchRepository>
  ) {
    super(Bank, dataSource);

    this.bankBranches = this.createHasManyRepositoryFactoryFor('bankBranches', bankBranchRepositoryGetter);

    this.registerInclusionResolver('bankBranches', this.bankBranches.inclusionResolver);
  }
}
