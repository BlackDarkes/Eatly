import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { SupportService } from './support.service';
import { SupportDto } from './dto/support.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() supportDto: SupportDto) {
    return this.supportService.createRequest(supportDto);
  }
}
