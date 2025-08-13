import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: "*",
		methods: "GET,POST,PUT,PATCH,HEAD,DELETE",
		headers: "Content-Type, Accept, Authorization",
		credentials: true,
	});

	app.use(cookieParser());

	await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
