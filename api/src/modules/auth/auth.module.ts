import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UsersModule } from "../user/users.module";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersEntity } from "../user/entities/users.entity";

@Module({
	imports: [
		JwtModule.register({
			secret: process.env.JWT_SECRET || "secret_key",
			signOptions: { expiresIn: "1h" },
		}),
		TypeOrmModule.forFeature([UsersEntity]),
		UsersModule,
		PassportModule,
	],
	controllers: [AuthController],
	providers: [AuthService],
})
export class AuthModule {}
