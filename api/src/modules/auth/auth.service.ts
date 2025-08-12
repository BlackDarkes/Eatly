import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";
import { UsersService } from '../users/users.service';
import { User } from 'src/entities/user/users.entity';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return this.usersService.create({ email, password_hash: hashedPassword })
  }

  async validateUser(email: string, password: string): Promise<any> {
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
    })

    return { accept_token: token }
  }
}
