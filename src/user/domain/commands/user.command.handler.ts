import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { CreateUserCommand } from './user.command';
@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private userService: UserService) {}
  execute(command: CreateUserCommand): Promise<any> {
    return this.userService.create(
      new User(command.name, command.email, command.phoneNumber),
    );
  }
}
