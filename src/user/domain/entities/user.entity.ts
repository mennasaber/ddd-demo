export class User {
  private name: string;
  private email: string;
  private phoneNumber: string;
  constructor(name: string, email: string, phoneNumber: string) {
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
