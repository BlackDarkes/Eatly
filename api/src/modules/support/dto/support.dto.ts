import { IsEmail, IsString, MinLength } from "class-validator";

export class SupportDto {
  @IsString()
  @MinLength(2)
  fullname: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(3)
  message: string;
}