import { Inject, Injectable } from '@nestjs/common';
import { UserDomain } from '../entities/user.entity';
import { IUserRepository } from '../repositories/user.repository';
@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository') private userRepository: IUserRepository,
  ) {}

  create(user: UserDomain) {
    return this.userRepository.create(user);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}
