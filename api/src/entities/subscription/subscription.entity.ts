import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("subscriptions")
export class Subscriptions {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: true })
  support: boolean;

  @Column({ default: true })
  fast_delivery: boolean;

  @Column({ default: true })
  discount: boolean;

  @Column({ default: true })
  transaction_history: boolean;

  @Column({ default: false })
  weekend_deals: boolean;

  @Column({ default: false })
  dashboard_access: boolean;

  @Column({ default: false })
  premium_group: boolean;
}