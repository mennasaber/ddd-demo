import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserController } from '../../../../user/infrastructure/adapters/controllers/user.controller';
import { User } from '../../../../user/infrastructure/persistence/entities/user.entity';
@Entity()
export class Blog {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column()
  title: string;
  @Column()
  content: string;
  @Column()
  userId: number;
  @ManyToOne((type) => User)
  user: UserController;
}
