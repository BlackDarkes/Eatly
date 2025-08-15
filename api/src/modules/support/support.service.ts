import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SupportEntity } from './entities/support.entity';
import { Repository } from 'typeorm';
import { SupportDto } from './dto/support.dto';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(SupportEntity)
    private readonly supportRepository: Repository<SupportEntity>
  ) {}

  async createRequest(dto: SupportDto) {
    const support = this.supportRepository.create(dto);
    await this.supportRepository.save(support);

    return { message: "Запрос создан, ожидайте ответа от нашего специалиста!" };
  }
}
