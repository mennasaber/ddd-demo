import { EventsHandler, IEvent, IEventHandler } from '@nestjs/cqrs';

export class BlogCreatedEvent implements IEvent {
  constructor(
    public title: string,
    public content: string,
    public userId: number,
  ) {}
}
