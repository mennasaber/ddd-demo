import { AggregateRoot } from '@nestjs/cqrs';

export interface IBaseRepository<TDomain extends AggregateRoot> {
  create(domain: TDomain): Promise<TDomain>;
  findAll(): Promise<TDomain[]>;
}
