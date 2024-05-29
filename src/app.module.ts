import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/infrastructure/persistence/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'ddd-demo',
      entities: [User],
      migrationsRun: false,
      migrations: [path.resolve(__dirname, 'migrations/*{.ts,.js}')],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}