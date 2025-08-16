import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ArticlesEntity } from "./articles.entity";

@Entity("article_info")
export class ArticleInfoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  article_id: string;

  @Column({ type: "varchar", length: 255, default: null })
  main_image: string;

  @Column("text", { array: true })
  titles: string[];

  @Column("text", { array: true })
  information: string[];

  @Column("text", { nullable: true, array: true })
  more_info: string[];

  @ManyToOne(() => ArticlesEntity, (articleEntity) => articleEntity.articleInfo)
  @JoinColumn({ name: "article_id" })
  article: ArticlesEntity;
}