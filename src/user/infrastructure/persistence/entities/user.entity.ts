import { AutoMap } from '@automapper/classes';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  @AutoMap()
  id: number;
  @Column()
  @AutoMap()
  name: string;
  @Column()
  @AutoMap()
  email: string;
  @Column()
  @AutoMap()
  phoneNumber: string;
}
