import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { BusinessCalendar, BusinessCalendarRelations } from '../../models';
export declare class BusinessCalendarRepository extends BaseLocalRepository<BusinessCalendar, typeof BusinessCalendar.prototype.id, BusinessCalendarRelations> {
    constructor(dataSource: juggler.DataSource);
}
