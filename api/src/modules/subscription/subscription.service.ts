import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SubscriptionsEntity } from './entities/subscription.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(SubscriptionsEntity)
    private readonly subscriptionRepository: Repository<SubscriptionsEntity>
  ) {}

  async getSubscription() {
    return this.subscriptionRepository.find()
  }
}
