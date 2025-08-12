import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() body: { email: string, password: string }) {
    return this.authService.register(body.email, body.password);
  }

  @Post("login")
  async login(
    @Body() body: { email: string, password: string },
    @Res() res: Response
  ) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user, res);
  }

  @UseGuards(JwtAuthGuard)
  @Post("logout")
  async logout(@Res() res: Response) {
    res.clearCookie("accept_token");
    return res.send({ status: "OK" })
  }
}
