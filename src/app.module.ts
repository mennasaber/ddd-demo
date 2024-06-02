import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { Blog } from './blog/infrastructure/persistence/entities/blog.entity';
import { User } from './user/infrastructure/persistence/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'ddd-demo',
      entities: [User, Blog],
      migrationsRun: false,
      migrations: [path.resolve(__dirname, 'common/migrations/*{.ts,.js}')],
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
