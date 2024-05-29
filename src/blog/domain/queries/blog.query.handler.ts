import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BlogService } from '../services/blog.service';
import { FindAllQuery } from './blog.query';
@QueryHandler(FindAllQuery)
export class FindAllHandler implements IQueryHandler<FindAllQuery> {
  constructor(private blogService: BlogService) {}
  execute(query: FindAllQuery): Promise<any> {
    return this.blogService.findAll();
  }
}
