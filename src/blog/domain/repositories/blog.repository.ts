import { IBaseRepository } from '../../../common/repositories/IBaseRepository';
import { BlogDomain } from '../entities/blog.entity';

export interface IBlogRepository extends IBaseRepository<BlogDomain> {}
