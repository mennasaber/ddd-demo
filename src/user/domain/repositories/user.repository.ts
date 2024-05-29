import { IBaseRepository } from '../../../common/repositories/IBaseRepository';
import { User } from '../entities/user.entity';

export interface IUserRepository extends IBaseRepository<User> {}
