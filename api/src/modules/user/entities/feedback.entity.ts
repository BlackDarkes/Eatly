import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsersEntity } from "./users.entity";

@Entity("feedback")
export class FeedbackEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("uuid")
	user_id: string;

	@Column("varchar", { length: 255 })
	type: string;

	@Column("varchar", { length: 255 })
	date: string;

	@Column("varchar", { length: 255 })
	message: string;

	@Column("decimal", { precision: 3, scale: 1 })
	stars: number;

  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  updated_ad: Date;

	@ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.feedbacks)
	@JoinColumn({ name: "user_id" })
	user: UsersEntity;
}
