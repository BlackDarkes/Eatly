import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { UsersService } from "../user/users.service";
import { UsersEntity } from "src/modules/user/entities/users.entity";
import { Response } from "express";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private jwtService: JwtService,
	) {}

	async register(dto: RegisterDto): Promise<{ message: string }> {
		const { email, password, fullname } = dto;
		const hashedPassword = await bcrypt.hash(password, 10);
		await this.usersService.create({ fullname, email, password_hash: hashedPassword });

		return { message: "Успешная регистрация!" }
	}

	async validateUser(dto: LoginDto): Promise<any> {
		const { email, password } = dto;
		const user = await this.usersService.findOne(email);

		if (!user || !(await bcrypt.compare(password, user.password_hash))) {
			throw new UnauthorizedException("Invalid email or password");
		}

		return user;
	}

	async login(user: any, res: Response) {
		const payload = { email: user.email, sub: user.id };
		const token = this.jwtService.sign(payload);

		res.cookie("accept_token", token, {
			httpOnly: true,
			secure: process.env.NODE_MODE === "production",
			sameSite: "strict",
			maxAge: 3600000, // 1 hour
		});

		return { accept_token: token };
	}
}
