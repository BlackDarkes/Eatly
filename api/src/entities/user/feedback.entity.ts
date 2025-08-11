import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("feedback")
export class Feedback {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  user_id: string;

  @Column("varchar", { length: 255 }) 
  type: string;

  @Column("varchar", { length: 512 })
  avatar: string;

  @Column("varchar", { length: 255 })
  fullname: string;

  @Column("varchar", { length: 255 })
  date: string;

  @Column("varchar", { length: 255 })
  message: string;

  @Column("decimal", { precision: 3, scale: 1 })
  stars: number;

  @ManyToOne(() => User, (user) => user.feedbacks)
  @JoinColumn({ name: "user_id" })
  user: User;
}