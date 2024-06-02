import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDomain } from '../../../domain/entities/user.entity';
import { IUserRepository } from '../../../domain/repositories/user.repository';
import { User } from '../entities/user.entity';
import { UserFactory } from '../factories/user.factory';
@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private userFactory : UserFactory
  ) {}
  async create(userDomain: UserDomain): Promise<UserDomain> {
    const user =  this.userFactory.toEntity(userDomain)
    return this.userFactory.toDomain(await this.userRepository.save(user));
  }
  async findAll(): Promise<UserDomain[]> {
    return this.userFactory.toDomainList(await this.userRepository.find());
  }
}
