import { AutoMap } from '@automapper/classes';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserController } from '../../../../user/infrastructure/adapters/controllers/user.controller';
import { User } from '../../../../user/infrastructure/persistence/entities/user.entity';
@Entity()
export class Blog {
  @PrimaryGeneratedColumn('increment')
  @AutoMap()
  id: number;
  @Column()
  @AutoMap()
  title: string;
  @Column()
  @AutoMap()
  content: string;
  @Column()
  @AutoMap()
  userId: number;
  @ManyToOne((type) => User)
  user: UserController;
}
