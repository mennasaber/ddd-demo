import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogDomain } from '../../../domain/entities/blog.entity';
import { IBlogRepository } from '../../../domain/repositories/blog.repository';
import { Blog } from '../entities/blog.entity';
import { BlogFactory } from '../factories/blog.factory';
@Injectable()
export class BlogRepository implements IBlogRepository {
  constructor(
    @InjectRepository(Blog) private blogRepository: Repository<Blog>,
    private blogFactory: BlogFactory,
  ) {}
  async create(domain: BlogDomain): Promise<BlogDomain> {
    const blog = this.blogFactory.toEntity(domain);
    return this.blogFactory.toDomain(await this.blogRepository.save(blog));
  }
  async findAll(): Promise<BlogDomain[]> {
    return this.blogFactory.toDomainList(await this.blogRepository.find());
  }
}
