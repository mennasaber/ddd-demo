import { Mapper, MappingProfile, createMap } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { UserDomain } from '../../../domain/entities/user.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class UserProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }
  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, User, UserDomain);
      createMap(mapper, UserDomain, User);
    };
  }
}
