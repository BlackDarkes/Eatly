import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import { config } from "dotenv";


async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: [
			"http://localhost:3000",
			"http://192.168.0.104:3000"
		],
		methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization", "Accept"],
		exposedHeaders: ["Authorization", "Set-Cookie"],
		credentials: true, 
	});

	app.use(cookieParser());

	await app.listen(process.env.PORT ?? 8000, "0.0.0.0");
}
bootstrap();
