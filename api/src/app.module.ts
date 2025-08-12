import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UsersModule } from "./modules/users/users.module";
import { SubscriptionModule } from "./modules/subscription/subscription.module";
import { ArticlesModule } from "./modules/articles/articles.module";
import { RestorantModule } from "./modules/restorant/restorant.module";
import { AuthModule } from './modules/auth/auth.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
	imports: [
		DatabaseModule,
		UsersModule,
		SubscriptionModule,
		ArticlesModule,
		RestorantModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "..", "public")
    }),
    AuthModule,
	],
})
export class AppModule {}
