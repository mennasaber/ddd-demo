import * as path from 'path';
import { DataSource } from 'typeorm';
import { User } from './user/infrastructure/persistence/entities/user.entity';

export default new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'ddd-demo',
  entities: [User],
  migrationsRun: false,
  migrations: [path.resolve(__dirname, 'migrations/*{.ts,.js}')],
});
