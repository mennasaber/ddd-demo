import { Inject, Injectable } from '@nestjs/common';
import { Blog } from '../entities/blog.entity';
import { IBlogRepository } from '../repositories/blog.repository';
@Injectable()
export class BlogService {
  constructor(
    @Inject('IBlogRepository') private blogRepository: IBlogRepository,
  ) {}
  create(blog: Blog) {
    return this.blogRepository.create(blog);
  }

  findAll() {
    return this.blogRepository.findAll();
  }
}
