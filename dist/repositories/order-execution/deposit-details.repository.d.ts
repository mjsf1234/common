import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { Account, Instrument, ServiceProviderAccount, DepositDetails, DepositDetailsRelations, Currency } from '../../models';
import { BaseLocalRepository } from '../base-local.repository';
import { InstrumentRepository } from '../master-data';
import { ServiceProviderAccountRepository } from '../transaction';
import { AccountRepository } from '../user-management';
import { CurrencyRepository } from '../';
export declare class DepositDetailsRepository extends BaseLocalRepository<DepositDetails, typeof DepositDetails.prototype.id, DepositDetailsRelations> {
    readonly instrument: BelongsToAccessor<Instrument, typeof DepositDetails.prototype.id>;
    readonly serviceProviderAccount: BelongsToAccessor<ServiceProviderAccount, typeof DepositDetails.prototype.id>;
    readonly account: BelongsToAccessor<Account, typeof DepositDetails.prototype.id>;
    readonly currency: BelongsToAccessor<Currency, typeof DepositDetails.prototype.id>;
    constructor(dataSource: juggler.DataSource, instrumentRepositoryGetter: Getter<InstrumentRepository>, serviceProviderAccountRepositoryGetter: Getter<ServiceProviderAccountRepository>, accountRepositoryGetter: Getter<AccountRepository>, currencyRepositoryGetter: Getter<CurrencyRepository>);
}
