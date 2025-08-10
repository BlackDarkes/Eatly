import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("purchases")
export class Purchase {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  product_ids: string[];

  @ManyToOne(() => User, (user) => user.purchase)
  user: User;
}