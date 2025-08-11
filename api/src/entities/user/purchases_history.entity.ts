import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("purchases_history")
export class PurchasesHistory {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  user_id: string;

  @Column("text", { array: true })
  history: string[];

  @Column("varchar", { length: 255 })
  price: string;

  @ManyToOne(() => User, (user) => user.purchasesHistory)
  @JoinColumn({ name: "user_id" })
  user: User;
}