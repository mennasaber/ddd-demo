import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateBlogCommand } from '../../../domain/commands/blog.command';
import { FindAllQuery } from '../../../domain/queries/blog.query';

@Controller('blog')
export class BlogController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Get('testCreate')
  testCreate() {
    return this.commandBus.execute(
      new CreateBlogCommand('blog title','blog content',1),
    );
  }

  @Get('testFind')
  testFind() {
    return this.queryBus.execute(new FindAllQuery());
  }
}
