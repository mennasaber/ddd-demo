import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { IBaseFactory } from '../../../../common/factories/IBaseFactory.factory';
import { BlogDomain } from '../../../domain/entities/blog.entity';
import { Blog } from '../entities/blog.entity';

@Injectable()
export class BlogFactory implements IBaseFactory<BlogDomain, Blog> {
  constructor(@InjectMapper() private mapper: Mapper) {}
  toDomain(entity: Blog): BlogDomain {
    return this.mapper.map(entity, Blog, BlogDomain);
  }
  toEntity(domain: BlogDomain): Blog {
    return this.mapper.map(domain, BlogDomain, Blog);
  }
  toDomainList(entities: Blog[]): BlogDomain[] {
    return this.mapper.mapArray(entities, Blog, BlogDomain);
  }
}
