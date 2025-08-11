import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("purchases")
export class Purchase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  user_id: string;

  @Column("text", { array: true })
  product_ids: string[];

  @ManyToOne(() => User, (user) => user.purchases)
  @JoinColumn({ name: "user_id" })
  user: User;
}