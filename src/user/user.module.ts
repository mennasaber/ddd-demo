import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserHandler } from './domain/commands/user.command.handler';
import { FindAllHandler } from './domain/queries/user.query.handler';
import { UserService } from './domain/services/user.service';
import { UserController } from './infrastructure/adapters/controllers/user.controller';
import { User } from './infrastructure/persistence/entities/user.entity';
import { UserRepository } from './infrastructure/persistence/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  providers: [
    UserService,
    { provide: 'IUserRepository', useClass: UserRepository },
    CreateUserHandler,
    FindAllHandler,
  ],
  controllers: [UserController],
})
export class UserModule {}
