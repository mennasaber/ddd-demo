import { AggregateRoot } from '@nestjs/cqrs';

export interface IBaseFactory<TDomain extends AggregateRoot, TEntity> {
  toDomain(entity: TEntity): TDomain;
  toEntity(domain: TDomain): TEntity;
  toDomainList(entities: TEntity[]): TDomain[];
}
