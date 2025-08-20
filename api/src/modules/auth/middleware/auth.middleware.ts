import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { NextFunction, Request, Response } from "express";
import { UserService } from "src/modules/user/users.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const accessToken = req.cookies?.access_token;
      const refreshToken = req.cookies?.refresh_token;

      if (accessToken) {
        try {
          const payload = this.jwtService.verify(accessToken);
          req.user = payload;
          req.headers.authorization = `Bearer ${accessToken}`;
          return next();
        } catch(error) {
          if (refreshToken) {
            await this.refreshToken(req, res);
            return next();
          }
        }
      }

      next();
    } catch(error) {
      res.clearCookie("asses_token");
      res.clearCookie("refresh_token");
      return next();
    }
  }

  private async refreshToken(req: Request, res: Response) {
    const refreshToken = req.cookies?.refresh_token;

    try {
      const payload = this.jwtService.verify(refreshToken);
      const user = await this.userService.findById(payload.sub);

      const newAccessToken = this.jwtService.sign(
        { email: user?.email, sub: user?.id },
        { expiresIn: "1h" },
      )

      const newRefreshToken = this.jwtService.sign(
        { id: user?.id },
        { expiresIn: "7d" },
      )

      res.cookie("access_token", newAccessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 3_600_000,
      })

      res.cookie("refresh_token", newRefreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })

      req.headers.authorization = `Bearer ${newAccessToken}`;
      req.user = payload;
    } catch(error) {
      throw new UnauthorizedException("Invalid refresh token");
    }
  }
}