import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Restorans } from './entities/restorans.entity';
import { Repository } from 'typeorm';
import { RestoranInfo } from './entities/restoran_info.entity';

@Injectable()
export class RestorantService {
  constructor(
    @InjectRepository(Restorans)
    private readonly restoransRepository: Repository<Restorans>,
    @InjectRepository(RestoranInfo)
    private readonly restoranInfoRepository: Repository<RestoranInfo>,
  ) {}

  async getRestorant(): Promise<Restorans[]> {
    return await this.restoransRepository.find();
  }

  async getRestorantInfo(id: { id: string }): Promise<RestoranInfo | null> {
    // return await this.restoranInfoRepository
    //   .createQueryBuilder("info")
    //   .leftJoinAndSelect("info.restorans", "restoran")
    //   .where("info.id = :id", { id: id.id })
    //   .getOne()

    return await this.restoranInfoRepository.query(
      "select * from restoran_info where restoran_id = $1",
      [id.id],
    )
  }
}
