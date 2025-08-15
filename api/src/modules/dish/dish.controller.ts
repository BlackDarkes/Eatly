import { Controller, Get, Param } from '@nestjs/common';
import { DishService } from './dish.service';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get()
  async findAll() {
    return this.dishService.findAll();
  }

  @Get(":id")
  async fundById(@Param("id") id: string) {
    return this.dishService.getById(id);
  }
}
