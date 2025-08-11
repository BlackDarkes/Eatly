import { Module } from '@nestjs/common';
import { RestorantService } from './restorant.service';
import { RestorantController } from './restorant.controller';

@Module({
  controllers: [RestorantController],
  providers: [RestorantService],
})
export class RestorantModule {}
