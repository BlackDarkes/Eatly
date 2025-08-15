import { Entity, Column, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { PurchasesEntity } from "./purchases.entity";
import { PurchasesHistoryEntity } from "./purchases_history.entity";
import { FeedbackEntity } from "./feedback.entity";
import { ArticlesEntity } from "../../article/entities/articles.entity";

@Entity("users")
export class UsersEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("varchar", { length: 255 })
	fullname: string;

	@Column({ unique: true })
	email: string;

	@Column({ select: false })
	password_hash: string;

	@Column("varchar", { length: 512, nullable: true, default: null })
	avatar?: string | null;

	@CreateDateColumn()
	create_at: Date;

	@UpdateDateColumn()
	updated_ad: Date;

	@OneToMany(() => PurchasesEntity, (purchasesEntity) => purchasesEntity.user)
	purchases: PurchasesEntity[];

	@OneToMany(
		() => PurchasesHistoryEntity,
		(purchasesHistoryEntity) => purchasesHistoryEntity.user,
	)
	purchasesHistory: PurchasesHistoryEntity[];

	@OneToMany(() => FeedbackEntity, (feedbackEntity) => feedbackEntity.user)
	feedbacks: FeedbackEntity[];

	@OneToMany(() => ArticlesEntity, (articlesEntity) => articlesEntity.user)
	articles: ArticlesEntity[];
}
