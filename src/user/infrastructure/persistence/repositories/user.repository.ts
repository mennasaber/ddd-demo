import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../domain/entities/user.entity';
import { IUserRepository } from '../../../domain/repositories/user.repository';
@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
