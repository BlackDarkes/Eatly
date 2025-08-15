import { Module } from '@nestjs/common';
import { RestorantService } from './restorant.service';
import { RestorantController } from './restorant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restorans } from './entities/restorans.entity';
import { RestoranInfo } from './entities/restoran_info.entity';
import { Dishes } from './entities/dishes.entity';
import { DishInfo } from './entities/dish_info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Restorans, RestoranInfo, Dishes, DishInfo])],
  controllers: [RestorantController],
  providers: [RestorantService],
})
export class RestorantModule {}
