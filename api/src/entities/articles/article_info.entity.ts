import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Article } from "./articles.entity";

@Entity("article_info")
export class ArticleInfo {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  titles: string[];

  @Column()
  information: string[];

  @ManyToOne(() => Article, (article) => article.articleInfo)
  article: Article;
}