import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import * as csurf from "csurf";
import { NextFunction, Request } from "express";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableCors({
		origin: "*",
		methods: "GET,POST,PUT,PATCH,HEAD,DELETE",
		headers: "Content-Type, Accept, Authorization",
		credentials: true,
	});

	app.use(cookieParser());

	const csrfProtection = csurf({
		cookie: {
			httpOnly: true,
			sameSite: "strict",
			secure: false,
		},
		value: (req) => {
			return req.headers["x-csrf-token"] as string;
		}
	});

	app.use((req: Request, res: Response, next: NextFunction) => {
		if (["/auth/login", "/auth/registration"].includes(req.path)) {
			return next();
		}

		return csrfProtection(req, res as any, next);
	});

	await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
