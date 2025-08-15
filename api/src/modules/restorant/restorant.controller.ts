import { Controller, Get, Param } from '@nestjs/common';
import { RestorantService } from './restorant.service';

@Controller('restorants')
export class RestorantController {
  constructor(private readonly restorantService: RestorantService) {}

  @Get()
  async getRestorants() {
    return this.restorantService.getRestorant();
  }

  @Get(":id")
  async getRestorantInfoById(@Param() id: { id: string }) {
    return this.restorantService.getRestorantInfo(id)
  }
}
