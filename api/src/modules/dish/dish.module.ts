import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishController } from './dish.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DishesEntity } from './entities/dishes.entity';
import { DishInfoEntity } from './entities/dish_info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DishesEntity, DishInfoEntity])],
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
