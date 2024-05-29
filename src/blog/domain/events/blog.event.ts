export class BlogCreatedEvent {
  constructor(
    public title: string,
    public content: string,
    public userId: number,
  ) {}
}
