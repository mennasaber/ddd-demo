export class Blog {
  private title: string;
  private content: string;
  private userId: number;
  constructor(title: string, content: string, userId: number) {
    this.title = title;
    this.content = content;
    this.userId = userId;
  }
}
