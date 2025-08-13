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
import { ArticleInfo } from "./article_info.entity";
import { UsersEntity } from "src/modules/user/entities/users.entity";

@Entity("articles")
export class Articles {
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

	@OneToMany(() => ArticleInfo, (articleInfo) => articleInfo.article)
	articleInfo: ArticleInfo[];

	@ManyToOne(() => UsersEntity, (usersEntity) => usersEntity.articles)
	@JoinColumn({ name: "user_id" })
	user: UsersEntity;
}
