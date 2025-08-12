import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport"
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "secret_key",
      signOptions: { expiresIn: "1H" },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
