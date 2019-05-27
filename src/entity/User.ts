import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  name?: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  sessionToken?: string = '';

  @Column()
  acceptTerms: boolean = false;

  @Column({ nullable: true })
  active: boolean = false;


}