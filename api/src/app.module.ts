import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/user/users.module";
import { SubscriptionModule } from "./modules/subscription/subscription.module";
import { ArticleModule } from "./modules/article/article.module";
import { RestorantModule } from "./modules/restorant/restorant.module";
import { AuthModule } from "./modules/auth/auth.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { join } from "path";
import { TypeOrmModule } from "@nestjs/typeorm";
import { getTypeOrmConfig } from "./config/typeorm.config";
import { SupportModule } from './modules/support/support.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, "..", "public"),
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getTypeOrmConfig,
			inject: [ConfigService],
		}),
		UsersModule,
		SubscriptionModule,
		ArticleModule,
		RestorantModule,
		AuthModule,
		SupportModule,
	],
})
export class AppModule {}
