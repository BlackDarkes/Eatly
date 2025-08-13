import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "./users.entity";

@Entity("purchases_history")
export class PurchasesHistoryEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  user_id: string;

  @Column("text", { array: true })
  history: string[];

  @Column("varchar", { length: 255 })
  price: string;

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.purchasesHistory)
  @JoinColumn({ name: "user_id" })
  user: UsersEntity;
}