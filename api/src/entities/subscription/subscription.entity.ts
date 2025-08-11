import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("subscription")
export class Subscription {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  support: boolean;

  @Column()
  fast_delivery: boolean;

  @Column()
  discount: boolean;

  @Column()
  transaction_history: boolean;

  @Column()
  weekend_deals: boolean;

  @Column()
  dashboard_access: boolean;

  @Column()
  premium_group: boolean;
}