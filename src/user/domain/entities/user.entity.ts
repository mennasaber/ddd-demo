import { AutoMap } from '@automapper/classes';
import { AggregateRoot } from '@nestjs/cqrs';

export class UserDomain extends AggregateRoot {
  @AutoMap()
  private id: string;
  @AutoMap()
  private name: string;
  @AutoMap()
  private email: string;
  @AutoMap()
  private phoneNumber: string;
  constructor(name: string, email: string, phoneNumber: string) {
    super();
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPhoneNumber() {
    return this.phoneNumber;
  }
}
