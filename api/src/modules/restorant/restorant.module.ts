import { Module } from '@nestjs/common';
import { RestorantService } from './restorant.service';
import { RestorantController } from './restorant.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestoransEntity } from './entities/restorans.entity';
import { RestoranInfoEntity } from './entities/restoran_info.entity';
import { DishesEntity } from './entities/dishes.entity';
import { DishInfoEntity } from './entities/dish_info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestoransEntity, RestoranInfoEntity, DishesEntity, DishInfoEntity])],
  controllers: [RestorantController],
  providers: [RestorantService],
})
export class RestorantModule {}
