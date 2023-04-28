import {BaseLocalRepository} from '../../repositories';
import {juggler} from '@loopback/repository';
import {Relationship, RelationshipRelations} from '../../models';

export class RelationshipRepository extends BaseLocalRepository<Relationship, typeof Relationship.prototype.id, RelationshipRelations> {
  constructor(dataSource: juggler.DataSource) {
    super(Relationship, dataSource);
  }
}
