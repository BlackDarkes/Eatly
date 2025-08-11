import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("purchases_history")
export class PurchasesHistory {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  history: string[];

  @Column()
  price: string;

  @ManyToOne(() => User, (user) => user.purchasesHistory)
  @JoinColumn({ name: "user_id" })
  user: User;
}