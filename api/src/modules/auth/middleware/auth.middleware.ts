import {
	Injectable,
	NestMiddleware,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
	constructor(
		private readonly jwtService: JwtService,
	) {}

	async use(req: Request, res: Response, next: NextFunction) {
		try {
			const authRoutesToSkip = [
				"/auth/login",
				"/auth/register",
				"/auth/refresh",
				"/auth/logout",
			];

			if (authRoutesToSkip.includes(req.url)) {
				return next();
			}
			const accessToken = req.cookies?.access_token;

			if (accessToken) {
				try {
					const payload = this.jwtService.verify(accessToken);
					req.user = payload;
					req.headers.authorization = `Bearer ${accessToken}`;
					return next();
				} catch (error) {
					res.clearCookie("access_token");
				}
			}

			next();
		} catch (error) {
			res.clearCookie("asses_token");
			res.clearCookie("refresh_token");
			return next();
		}
	}
}
