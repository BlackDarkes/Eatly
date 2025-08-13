import { IsEmail, IsOptional, IsString,  MinLength } from "class-validator";

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @MinLength(2)
  @IsOptional()
  avatar?: string | null;
}