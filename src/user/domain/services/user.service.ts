import { Inject, Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { IUserRepository } from '../repositories/user.repository';
@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository') private userRepository: IUserRepository,
  ) {}

  create(user: User) {
    return this.userRepository.create(user);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}
