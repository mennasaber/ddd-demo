import { Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../../../domain/commands/user.command';
import { FindAllQuery } from '../../../domain/queries/user.query';

@Controller('user')
export class UserController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
  ) {}

  @Get('testCreate')
  testCreate() {
    return this.commandBus.execute(
      new CreateUserCommand('Menna', 'menna@gmail.com', '01126772117'),
    );
  }

  @Get('testFind')
  testFind() {
    return this.queryBus.execute(new FindAllQuery());
  }
}
