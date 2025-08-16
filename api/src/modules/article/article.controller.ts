import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { ArticleService } from "./article.service";
import { ArticlesEntity } from "./entities/articles.entity";

@Controller("article")
export class ArticleController {
	constructor(private readonly articlesService: ArticleService) {}

	@Get()
	async findAll(): Promise<ArticlesEntity[]> {
		return this.articlesService.findAll();
	}

	@Get(":id")
	async findById(@Param("id") id: string){
		return this.articlesService.findById(id);
	}

	@Get(":id/info")
	async getArticleInfo(@Param("id") id: string) {
		return this.articlesService.getArticleInfo(id)
	}
}
