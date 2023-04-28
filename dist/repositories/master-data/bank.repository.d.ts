import { BaseLocalRepository } from '../../repositories';
import { Getter, HasManyRepositoryFactory, juggler } from '@loopback/repository';
import { Bank, BankBranch, BankRelations } from '../../models';
import { BankBranchRepository } from './bank-branch.repository';
export declare class BankRepository extends BaseLocalRepository<Bank, typeof Bank.prototype.id, BankRelations> {
    readonly bankBranches: HasManyRepositoryFactory<BankBranch, typeof Bank.prototype.id>;
    constructor(dataSource: juggler.DataSource, bankBranchRepositoryGetter: Getter<BankBranchRepository>);
}
