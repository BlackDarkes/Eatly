import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: true,
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization", "Accept"],
		exposedHeaders: ["Authorization", "Set-Cookie"],
		credentials: true, 
	});

	app.use(cookieParser());

	await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
