import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UserService } from "../user/users.service";
import { UsersEntity } from "src/modules/user/entities/users.entity";
import { Response } from "express";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
	constructor(
		private usersService: UserService,
		private jwtService: JwtService,
	) {}

	async register(dto: RegisterDto): Promise<{ message: string }> {
		const { email, password, fullname } = dto;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await this.usersService.findOne(email);

		if (user) {
			throw new UnauthorizedException("Данная почта уже занята!");
		}

		await this.usersService.create({
			fullname,
			email,
			password_hash: hashedPassword,
		});

		return { message: "Успешная регистрация!" };
	}

	async validateUser(dto: LoginDto): Promise<any> {
		const { email, password } = dto;
		const user = await this.usersService.findOne(email);

		if (!user || !(await bcrypt.compare(password, user.password_hash))) {
			throw new UnauthorizedException("Invalid email or password");
		}

		return user;
	}

	async login(user: UsersEntity, res: Response) {
		const payload = { email: user.email, sub: user.id };
		const token = this.jwtService.sign(payload);

		res.cookie("access_token", token, {
			httpOnly: true,
			secure: false,
			sameSite: "strict",
			maxAge: 3600000, // 1 hour
		});

		const userDb = await this.usersService.findById(user.id);

		return { 
			message: "Вы успешно авторизовались!",
			user: {
        id: userDb?.id,
        email: userDb?.email,
        fullname: userDb?.fullname,
				avatar: userDb?.avatar,
      }
		};
	}

	async refreshToken(refreshToken: string, res: Response) {
		try {
			const payload = this.jwtService.verify(refreshToken);
			const user = await this.usersService.findById(payload.sub);

			if (!user) {
				throw new UnauthorizedException("User not found");
			}

			const accessTokenPayload = { email: user?.email, sub: user?.id };
			const refreshTokenPayload = { email: user.email, sub: user.id };

			const newAccessToken = this.jwtService.sign(accessTokenPayload, {
				expiresIn: "1h",
			});
			const newRefreshToken = this.jwtService.sign(refreshTokenPayload, {
				expiresIn: "7d",
			});

			res.cookie("access_token", newAccessToken, {
				httpOnly: true,
				secure: false,
				sameSite: "strict",
				maxAge: 3_600_000,
			});

			res.cookie("refresh_token", newRefreshToken, {
				httpOnly: true,
				secure: false,
				sameSite: "strict",
				maxAge: 7 * 24 * 60 * 60 * 1000
			});

			return { 
        message: 'Tokens refreshed successfully',
        user: {
          id: user.id,
          email: user.email,
          fullname: user.fullname
        }
      };
		} catch (error) {
			if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('Refresh token expired');
      }
      if (error.name === 'JsonWebTokenError') {
        throw new UnauthorizedException('Invalid refresh token');
      }
      throw error;
		}
	}
}
