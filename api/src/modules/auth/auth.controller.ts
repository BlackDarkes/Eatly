import {
	Body,
	Controller,
	Get,
	HttpCode,
	Post,
	Req,
	Res,
	UnauthorizedException,
	UseGuards,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Request, Response } from "express";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { IJwtPayload } from "src/types/jwtPayload.interface";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("register")
	async register(@Body() registerDto: RegisterDto) {
		return this.authService.register(registerDto);
	}

	@Post("login")
	async login(
		@Body() loginDto: LoginDto,
		@Res({ passthrough: true }) res: Response,
	) {
		const user = await this.authService.validateUser(loginDto);
		return this.authService.login(user, res);
	}

	@Get("me")
	@UseGuards(JwtAuthGuard)
	async getMe(@Req() req: Request & { user: IJwtPayload }) {
		return this.authService.getCurrentUser(req.user?.sub);
	}

	@UseGuards(JwtAuthGuard)
	@Post("logout")
	async logout(@Res() res: Response) {
		res.clearCookie("access_token", {
			httpOnly: true,
			secure: false,
			sameSite: "strict",
		});
		res.clearCookie("refresh_token", {
			httpOnly: true,
			secure: false,
			sameSite: "strict",
		});

		return res.status(200).json({ message: "Вы вышли из аккаунта!" });
	}

	@Post("refresh")
	@HttpCode(200)
	async refreshToken(@Req() req: Request, @Res() res: Response) {
		const refreshToken = req.cookies?.refresh_token;

		if (!refreshToken) {
			throw new UnauthorizedException("Refresh token not found");
		}

		try {
			const result = await this.authService.refreshToken(refreshToken, res);
			return res.json(result);
		} catch (error) {
			res.clearCookie("access_token");
			res.clearCookie("refresh_token");
			throw new UnauthorizedException("Failed to refresh tokens");
		}
	}
}
