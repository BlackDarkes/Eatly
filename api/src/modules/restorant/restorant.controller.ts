import { Controller } from '@nestjs/common';
import { RestorantService } from './restorant.service';

@Controller('restorant')
export class RestorantController {
  constructor(private readonly restorantService: RestorantService) {}
}
