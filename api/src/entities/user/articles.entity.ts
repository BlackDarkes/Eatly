import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArticleInfo } from "./article_info.entity";
import { User } from "./users.entity";

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

  @OneToMany(() => ArticleInfo, (articleInfo) => articleInfo.article)
  articleInfo: ArticleInfo[];

  @ManyToOne(() => User, (user) => user.articles)
  @JoinColumn({ name: "user_id" })
  user: User;
}