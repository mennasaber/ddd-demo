export class CreateBlogCommand {
  constructor(
    public title: string,
    public content: string,
    public userId: number,
  ) {}
}
