import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async getUser(@Param("id") id: string) {
    return this.usersService.findById(id);
  }

  @Get(":id/purchases")
  async getAllPurchases(@Param("id") id: string) {
    return this.usersService.getUserPurchases(id);
  }
}
