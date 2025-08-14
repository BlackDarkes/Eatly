import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "./entities/users.entity";
import { PurchasesEntity } from "./entities/purchases.entity";
import { PurchasesHistoryEntity } from "./entities/purchases_history.entity";
import { FeedbackEntity } from "./entities/feedback.entity";
import { ArticlesEntity } from "../article/entities/articles.entity";
import { ArticleInfoEntity } from "../article/entities/article_info.entity";

@Module({
	imports: [
		TypeOrmModule.forFeature([
			UsersEntity,
			PurchasesEntity,
			PurchasesHistoryEntity,
			FeedbackEntity,
			ArticlesEntity,
			ArticleInfoEntity,
		]),
	],
	controllers: [UsersController],
	providers: [UsersService],
	exports: [UsersService],
})
export class UsersModule {}
