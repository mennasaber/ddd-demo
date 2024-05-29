import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Blog } from '../entities/blog.entity';
import { BlogService } from '../services/blog.service';
import { CreateBlogCommand } from './blog.command';
@CommandHandler(CreateBlogCommand)
export class CreateBlogHandler implements ICommandHandler<CreateBlogCommand> {
  constructor(private blogService: BlogService) {}
  execute(command: CreateBlogCommand): Promise<any> {
    return this.blogService.create(
      new Blog(command.title, command.content, command.userId),
    );
  }
}
