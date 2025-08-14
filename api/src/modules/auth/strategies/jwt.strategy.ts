import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req) => req?.cookies?.access_token,
			]),
			ignoreExpiration: false,
			secretOrKey:
				process.env.JWT_SECRET ||
				"d78b41e73b5f823b1127bb6548979027079436833a5d02c1e4eaf84d257fef82",
		});
	}
  
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
