import { AggregateRoot } from '@nestjs/cqrs';
import { BlogCreatedEvent } from '../events/blog.event';

export class Blog extends AggregateRoot {
  private title: string;
  private content: string;
  private userId: number;
  constructor(title: string, content: string, userId: number) {
    super();
    this.title = title;
    this.content = content;
    this.userId = userId;
  }
  getTitle() {
    return this.title;
  }

  getContent() {
    return this.content;
  }

  getUserId() {
    return this.userId;
  }

  private onBlogCreatedEvent(event: BlogCreatedEvent) {
    console.log(
      `Internal: blog ${event.title} created successfully for user with id ${event.userId}`,
    );
  }
}
