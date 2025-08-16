import { Module } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { ArticleController } from "./article.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticlesEntity } from "./entities/articles.entity";
import { UsersEntity } from "../user/entities/users.entity";
import { ArticleInfoEntity } from "./entities/article_info.entity";

@Module({
	imports: [TypeOrmModule.forFeature([ArticlesEntity, UsersEntity, ArticleInfoEntity])],
	controllers: [ArticleController],
	providers: [ArticleService],
})
export class ArticleModule {}
