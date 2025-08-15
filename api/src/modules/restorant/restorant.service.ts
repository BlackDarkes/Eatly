import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestoransEntity } from './entities/restorans.entity';
import { Repository } from 'typeorm';
import { RestoranInfoEntity } from './entities/restoran_info.entity';

@Injectable()
export class RestorantService {
  constructor(
    @InjectRepository(RestoransEntity)
    private readonly restoransRepository: Repository<RestoransEntity>,
    @InjectRepository(RestoranInfoEntity)
    private readonly restoranInfoRepository: Repository<RestoranInfoEntity>,
  ) {}

  async getRestorant(): Promise<RestoransEntity[]> {
    return await this.restoransRepository.find();
  }

  async getRestorantInfo(id: string): Promise<RestoranInfoEntity | null> {
    // return await this.restoranInfoRepository
    //   .createQueryBuilder("info")
    //   .leftJoinAndSelect("info.restorans", "restoran")
    //   .where("info.id = :id", { id: id.id })
    //   .getOne()

    return await this.restoranInfoRepository.findOne({ where: { restoran_id: id } })
  }
}
