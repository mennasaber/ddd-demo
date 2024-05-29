import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { BlogCreatedEvent } from '../../../blog/domain/events/blog.event';
@EventsHandler(BlogCreatedEvent)
export class BlogCreatedEventHandler
  implements IEventHandler<BlogCreatedEvent>
{
  handle(event: BlogCreatedEvent) {
    //NOTE: We can call service here
    console.log(
      `blog ${event.title} created successfully for user with id ${event.userId}`,
    );
  }
}
