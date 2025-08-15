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
import { ArticleInfoEntity } from "./article_info.entity";
import { UsersEntity } from "../../user/entities/users.entity";

@Entity("articles")
export class ArticlesEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("uuid")
	user_id: string;

	@Column("varchar", { length: 512 })
	img: string;

	@Column("varchar", { length: 255 })
	title: string;

	@Column("varchar", { length: 255 })
	date: string;

	@CreateDateColumn()
	create_at: Date;

	@UpdateDateColumn()
	updated_ad: Date;

	@OneToMany(() => ArticleInfoEntity, (articleInfoEntity) => articleInfoEntity.article)
	articleInfo: ArticleInfoEntity[];

	@ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.articles)
	@JoinColumn({ name: "user_id" })
	user: UsersEntity;
}
