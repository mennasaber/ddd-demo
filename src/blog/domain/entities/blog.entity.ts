import { AutoMap } from '@automapper/classes';
import { AggregateRoot } from '@nestjs/cqrs';
import { BlogCreatedEvent } from '../events/blog.event';

export class BlogDomain extends AggregateRoot {
  @AutoMap()
  private id: string;
  @AutoMap()
  private title: string;
  @AutoMap()
  private content: string;
  @AutoMap()
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
