import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Articles } from "./articles.entity";

@Entity("article_info")
export class ArticleInfo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  article_id: string;

  @Column("text", { array: true })
  titles: string[];

  @Column("text", { array: true })
  information: string[];

  @Column("text", { nullable: true, array: true })
  more_info: string[];

  @ManyToOne(() => Articles, (article) => article.articleInfo)
  @JoinColumn({ name: "article_id" })
  article: Articles;
}