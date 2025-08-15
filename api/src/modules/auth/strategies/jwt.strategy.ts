import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { config } from "dotenv";
import { Strategy, ExtractJwt } from "passport-jwt";

config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
        ExtractJwt.fromAuthHeaderAsBearerToken(),
      ]),
			secretOrKey: process.env.JWT_SECRET || 'secret_key',
		});
	}
  
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
