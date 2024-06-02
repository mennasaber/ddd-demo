import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserHandler } from './domain/commands/user.command.handler';
import { BlogCreatedEventHandler } from './domain/events/blog.event.handler';
import { FindAllHandler } from './domain/queries/user.query.handler';
import { UserService } from './domain/services/user.service';
import { UserController } from './infrastructure/adapters/controllers/user.controller';
import { User } from './infrastructure/persistence/entities/user.entity';
import { UserFactory } from './infrastructure/persistence/factories/user.factory';
import { UserProfile } from './infrastructure/persistence/profiles/user.profile';
import { UserRepository } from './infrastructure/persistence/repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  providers: [
    UserService,
    { provide: 'IUserRepository', useClass: UserRepository },
    CreateUserHandler,
    FindAllHandler,
    BlogCreatedEventHandler,
    UserFactory,
    UserProfile
  ],
  controllers: [UserController],
})
export class UserModule {}
