import {AccountRepository, AppUserRepository, BankAccountRepository, BaseLocalRepository, RtaRepository, UserManagementAppFileRepository} from '..';
import {BelongsToAccessor, Getter, juggler, repository} from '@loopback/repository';
import {Account, AppUser, BankAccount, ConsolidatedDocument, ConsolidatedDocumentRelations, Rta, UserManagementAppFile} from '../../models';

export class ConsolidatedDocumentRepository extends BaseLocalRepository<
  ConsolidatedDocument,
  typeof ConsolidatedDocument.prototype.id,
  ConsolidatedDocumentRelations
> {
  public readonly appUser: BelongsToAccessor<AppUser, typeof ConsolidatedDocument.prototype.id>;
  public readonly account: BelongsToAccessor<Account, typeof ConsolidatedDocument.prototype.id>;
  public readonly bankAccount: BelongsToAccessor<BankAccount, typeof ConsolidatedDocument.prototype.id>;
  public readonly appFile: BelongsToAccessor<UserManagementAppFile, typeof ConsolidatedDocument.prototype.id>;
  public readonly rta: BelongsToAccessor<Rta, typeof ConsolidatedDocument.prototype.id>;
  constructor(
    dataSource: juggler.DataSource,
    @repository.getter('AppUserRepository') appUserRepositoryGetter: Getter<AppUserRepository>,
    @repository.getter('BankAccountRepository') bankAccountRepositoryGetter: Getter<BankAccountRepository>,
    @repository.getter('AccountRepository') accountRepositoryGetter: Getter<AccountRepository>,
    @repository.getter('UserManagementAppFileRepository') userManagementAppFileRepositoryGetter: Getter<UserManagementAppFileRepository>,
    @repository.getter('RtaRepository') rtaRepositoryGetter: Getter<RtaRepository>
  ) {
    super(ConsolidatedDocument, dataSource);
    this.appUser = this.createBelongsToAccessorFor('appUser', appUserRepositoryGetter);
    this.bankAccount = this.createBelongsToAccessorFor('bankAccount', bankAccountRepositoryGetter);
    this.account = this.createBelongsToAccessorFor('account', accountRepositoryGetter);
    this.appFile = this.createBelongsToAccessorFor('appFile', userManagementAppFileRepositoryGetter);
    this.rta = this.createBelongsToAccessorFor('rta', rtaRepositoryGetter);

    this.registerInclusionResolver('appUser', this.appUser.inclusionResolver);
    this.registerInclusionResolver('bankAccount', this.bankAccount.inclusionResolver);
    this.registerInclusionResolver('account', this.account.inclusionResolver);
    this.registerInclusionResolver('appFile', this.appFile.inclusionResolver);
    this.registerInclusionResolver('rta', this.rta.inclusionResolver);
  }
}
