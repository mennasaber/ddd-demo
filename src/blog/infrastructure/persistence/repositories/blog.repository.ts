import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from '../../../domain/entities/blog.entity';
import { IBlogRepository } from '../../../domain/repositories/blog.repository';
@Injectable()
export class BlogRepository implements IBlogRepository {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
  ) {}
  create(entity: Blog): Promise<Blog> {
    return this.blogRepository.save(entity);
  }
  findAll(): Promise<Blog[]> {
    return this.blogRepository.find();
  }
}
