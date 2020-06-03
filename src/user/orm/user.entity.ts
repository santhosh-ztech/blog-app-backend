import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ default: true, nullable: false })
  isActive: boolean;

  @Column({ nullable: false, length: 500 })
  password: string;
}
