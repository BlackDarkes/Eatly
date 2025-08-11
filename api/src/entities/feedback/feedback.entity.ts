import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("feedback")
export class Feedback {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  avatar: string;

  @Column()
  fullname: string;

  @Column()
  date: string;

  @Column()
  message: string;

  @Column()
  stars: string;
}