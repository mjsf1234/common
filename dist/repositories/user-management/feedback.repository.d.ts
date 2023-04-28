import { BaseLocalRepository } from '../../repositories';
import { BelongsToAccessor, Getter, juggler } from '@loopback/repository';
import { AppUser, Feedback, FeedbackRelations } from '../../models';
import { AppUserRepository } from './app-user.repository';
export declare class FeedbackRepository extends BaseLocalRepository<Feedback, typeof Feedback.prototype.id, FeedbackRelations> {
    readonly appUser: BelongsToAccessor<AppUser, typeof Feedback.prototype.id>;
    constructor(dataSource: juggler.DataSource, appUserRepositoryGetter: Getter<AppUserRepository>);
}
