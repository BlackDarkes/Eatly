import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UsersEntity } from "./users.entity";

@Entity("purchases")
export class PurchasesEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  user_id: string;

  @Column("text", { array: true })
  product_ids: string[];

  @ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.purchases)
  @JoinColumn({ name: "user_id" })
  user: UsersEntity;
}