import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
  private name: string;
  private email: string;
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
