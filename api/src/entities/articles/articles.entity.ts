import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ArticleInfo } from "./article_info.entity";

@Entity("articles") 
export class Articles {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 512 })
  img: string;

  @Column("varchar", { length: 255 })
  title: string;

  @Column("varchar", { length: 512 })
  avatar: string;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255 })
  date: string;

  @OneToMany(() => ArticleInfo, (articleInfo) => articleInfo.article)
  articleInfo: ArticleInfo[];
}