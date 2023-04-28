import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AddressType, Country, OverseesAddress, OverseesAddressRelations } from '../../models';
import { AddressTypeRepository, CountryRepository } from '../master-data';
export declare class OverseesAddressRepository extends BaseLocalRepository<OverseesAddress, typeof OverseesAddress.prototype.id, OverseesAddressRelations> {
    readonly country: BelongsToAccessor<Country, typeof OverseesAddress.prototype.id>;
    readonly addressType: BelongsToAccessor<AddressType, typeof OverseesAddress.prototype.id>;
    constructor(dataSource: juggler.DataSource, countryRepositoryGetter: Getter<CountryRepository>, addressTypeRepositoryGetter: Getter<AddressTypeRepository>);
}
