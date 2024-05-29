import { IBaseRepository } from '../../../common/repositories/IBaseRepository';
import { Blog } from '../entities/blog.entity';

export interface IBlogRepository extends IBaseRepository<Blog> {}
