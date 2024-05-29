import * as path from 'path';
import { DataSource } from 'typeorm';
import { Blog } from './blog/infrastructure/persistence/entities/blog.entity';
import { User } from './user/infrastructure/persistence/entities/user.entity';

export default new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'ddd-demo',
  entities: [User, Blog],
  migrationsRun: false,
  migrations: [path.resolve(__dirname, 'common/migrations/*{.ts,.js}')],
});
