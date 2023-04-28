import { AddressRepository, BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Address, Bank, BankBranch, BankBranchRelations, Relationship } from '../../models';
import { BankRepository } from './bank.repository';
export declare class BankBranchRepository extends BaseLocalRepository<BankBranch, typeof BankBranch.prototype.id, BankBranchRelations> {
    readonly bank: BelongsToAccessor<Bank, typeof BankBranch.prototype.id>;
    readonly address: BelongsToAccessor<Address, typeof BankBranch.prototype.id>;
    readonly relationshipNomineeGuardian: BelongsToAccessor<Relationship, typeof BankBranch.prototype.id>;
    constructor(dataSource: juggler.DataSource, bankRepositoryGetter: Getter<BankRepository>, addressRepositoryGetter: Getter<AddressRepository>);
}
