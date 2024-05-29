import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Blog } from '../entities/blog.entity';
import { BlogCreatedEvent } from '../events/blog.event';
import { BlogService } from '../services/blog.service';
import { CreateBlogCommand } from './blog.command';
@CommandHandler(CreateBlogCommand)
export class CreateBlogHandler implements ICommandHandler<CreateBlogCommand> {
  constructor(
    private blogService: BlogService,
    private eventBus: EventBus,
  ) {}
  async execute(command: CreateBlogCommand): Promise<any> {
    const blog = await this.blogService.create(
      new Blog(command.title, command.content, command.userId),
    );
    this.eventBus.publish(
      new BlogCreatedEvent(
        blog.getTitle(),
        blog.getContent(),
        blog.getUserId(),
      ),
    );
    return blog;
  }
}
