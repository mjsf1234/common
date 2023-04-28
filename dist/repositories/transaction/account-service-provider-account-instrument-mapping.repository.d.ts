import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, AccountServiceProviderAccountInstrumentMapping, AccountServiceProviderAccountInstrumentMappingRelations, Instrument, ServiceProviderAccount } from '../../models';
import { AccountRepository } from '../user-management';
import { ServiceProviderAccountRepository } from './service-provider-account.repository';
import { InstrumentRepository } from '../master-data';
export declare class AccountServiceProviderAccountInstrumentMappingRepository extends BaseLocalRepository<AccountServiceProviderAccountInstrumentMapping, typeof AccountServiceProviderAccountInstrumentMapping.prototype.id, AccountServiceProviderAccountInstrumentMappingRelations> {
    readonly account: BelongsToAccessor<Account, typeof AccountServiceProviderAccountInstrumentMapping.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof AccountServiceProviderAccountInstrumentMapping.prototype.id>;
    readonly instrument: BelongsToAccessor<Instrument, typeof AccountServiceProviderAccountInstrumentMapping.prototype.id>;
    constructor(dataSource: juggler.DataSource, accountRepositoryGetter: Getter<AccountRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, instrumentRepositoryGetter: Getter<InstrumentRepository>);
}
