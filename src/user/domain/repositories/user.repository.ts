import { IBaseRepository } from '../../../common/repositories/IBaseRepository';
import { UserDomain } from '../entities/user.entity';

export interface IUserRepository extends IBaseRepository<UserDomain> {}
