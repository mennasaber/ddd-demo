import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { IBaseFactory } from '../../../../common/factories/IBaseFactory.factory';
import { UserDomain } from '../../../domain/entities/user.entity';
import { User } from '../entities/user.entity';
@Injectable()
export class UserFactory implements IBaseFactory<UserDomain, User> {
  constructor(@InjectMapper() private mapper: Mapper) {}
  toDomain(user: User) {
    return this.mapper.map(user, User, UserDomain);
  }
  toDomainList(users: User[]) {
    return this.mapper.mapArray(users, User, UserDomain);
  }
  toEntity(userDomain: UserDomain) {
    return this.mapper.map(userDomain, UserDomain, User);
  }
}
