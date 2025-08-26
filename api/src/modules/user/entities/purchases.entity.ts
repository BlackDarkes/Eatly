import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsersEntity } from "./users.entity";
import { PurchasesStatusEntity } from "./purchasesStatus.entity";

@Entity("purchases")
export class PurchasesEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("uuid")
	user_id: string;

	@Column("text", { array: true })
	product_ids: string[];

  @Column("text")
  status: string;

	@CreateDateColumn()
	create_at: Date;

	@UpdateDateColumn()
	updated_ad: Date;

	@ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.purchases)
	@JoinColumn({ name: "user_id" })
	user: UsersEntity;
}
