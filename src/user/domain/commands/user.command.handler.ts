import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { UserDomain } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { CreateUserCommand } from './user.command';
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private userService: UserService) {}
  execute(command: CreateUserCommand): Promise<UserDomain> {
    return this.userService.create(
      new UserDomain(command.name, command.email, command.phoneNumber),
    );
  }
}
