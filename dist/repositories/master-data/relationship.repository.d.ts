import { BaseLocalRepository } from '../../repositories';
import { juggler } from '@loopback/repository';
import { Relationship, RelationshipRelations } from '../../models';
export declare class RelationshipRepository extends BaseLocalRepository<Relationship, typeof Relationship.prototype.id, RelationshipRelations> {
    constructor(dataSource: juggler.DataSource);
}
