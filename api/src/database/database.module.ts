import { Module } from '@nestjs/common';
import { DatabaseSource } from './database.provider';

@Module({
  providers: [...DatabaseSource],
  exports: [...DatabaseSource]
})
export class DatabaseModule {}
