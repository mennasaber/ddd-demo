import { Mapper, MappingProfile, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { BlogDomain } from '../../../domain/entities/blog.entity';
import { Blog } from '../entities/blog.entity';

@Injectable()
export class BlogProfile extends AutomapperProfile {
  constructor(@InjectMapper() public mapper: Mapper) {
    super(mapper);
  }
  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, Blog, BlogDomain);
      createMap(mapper, BlogDomain, Blog);
    };
  }
}
