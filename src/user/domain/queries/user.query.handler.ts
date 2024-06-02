import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserDomain } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { FindAllQuery } from './user.query';

@QueryHandler(FindAllQuery)
export class FindAllHandler implements IQueryHandler<FindAllQuery> {
  constructor(private userService: UserService) {}
  execute(query: FindAllQuery): Promise<UserDomain[]> {
    return this.userService.findAll();
  }
}
