import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArticleInfo } from "./article_info.entity";

@Entity("article") 
export class Article {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  img: string;

  @Column()
  title: string;

  @Column()
  avatar: string;

  @Column()
  name: string;

  @Column()
  date: string;

  @OneToMany(() => ArticleInfo, (articleInfo) => articleInfo.article)
  @JoinColumn({ name: "article_id" })
  articleInfo: ArticleInfo;
}