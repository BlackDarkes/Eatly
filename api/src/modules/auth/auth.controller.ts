import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post("login")
  async login(
    @Body() loginDto: LoginDto,
    @Res() res: Response
  ) {
    const user = await this.authService.validateUser(loginDto);
    return this.authService.login(user, res);
  }

  @UseGuards(JwtAuthGuard)
  @Post("logout")
  async logout(@Res() res: Response) {
    res.clearCookie("accept_token");
    return res.send({ status: "OK" })
  }
}
