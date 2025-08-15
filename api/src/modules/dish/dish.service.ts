import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DishesEntity } from './entities/dishes.entity';
import { Repository } from 'typeorm';
import { DishInfoEntity } from './entities/dish_info.entity';

@Injectable()
export class DishService {
  constructor(
    @InjectRepository(DishesEntity)
    private readonly dishesRepository: Repository<DishesEntity>,
    @InjectRepository(DishInfoEntity)
    private readonly dishInfoRepository: Repository<DishInfoEntity>
  ) {}

  async findAll(): Promise<DishesEntity[]> {
    return this.dishesRepository.find();
  }

  async getById(id: string): Promise<any> {
    // return this.dishInfoRepository.findOne({ where: { dishes_id: id } })
    
    return this.dishInfoRepository
      .createQueryBuilder("dish_info")
      .select([
        "dishes.id as id",
        "dishes.type as type",
        "dishes.name as name",
        "dishes.time as time",
        "dishes.price as price",
        "dish_info.img as img",
        "dish_info.description as description",
      ])
      .innerJoin("dish_info.dishes", "dishes")
      .where("dishes.id = :id", { id })
      .getRawOne();
  }
}
