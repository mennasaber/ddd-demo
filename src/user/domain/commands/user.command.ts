export class CreateUserCommand {
  constructor(
    public name:string,
    public email:string,
    public phoneNumber:string,
  ) {}
}
