import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserService } from '../services/user.service';
import { FindAllQuery } from './user.query';

@QueryHandler(FindAllQuery)
export class FindAllHandler implements IQueryHandler<FindAllQuery> {
  constructor(private userService: UserService) {}
  execute(query: FindAllQuery): Promise<any> {
    return this.userService.findAll();
  }
}
