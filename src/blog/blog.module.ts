import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateBlogHandler } from './domain/commands/blog.command.handler';
import { FindAllHandler } from './domain/queries/blog.query.handler';
import { BlogService } from './domain/services/blog.service';
import { BlogController } from './infrastructure/adapters/controllers/blog.controller';
import { Blog } from './infrastructure/persistence/entities/blog.entity';
import { BlogFactory } from './infrastructure/persistence/factories/blog.factory';
import { BlogProfile } from './infrastructure/persistence/profiles/blog.profile';
import { BlogRepository } from './infrastructure/persistence/repositories/blog.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Blog]), CqrsModule],
  controllers: [BlogController],
  providers: [
    BlogService,
    { provide: 'IBlogRepository', useClass: BlogRepository },
    CreateBlogHandler,
    FindAllHandler,
    BlogFactory,
    BlogProfile,
  ],
})
export class BlogModule {}
