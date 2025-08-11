import { Entity, Column, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Purchase } from "./purchases.entity";
import { AuthToken } from "./auth_token.entity";
import { PurchasesHistory } from "./purchases_history.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  @Index()
  id: string

  @Column()
  fullname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  purchase: Purchase[];

  @OneToMany(() => PurchasesHistory, (purchasesHistory) => purchasesHistory.user)
  purchasesHistory: PurchasesHistory[];

  @OneToMany(() => AuthToken, (authToken) => authToken.user)
  authToken: AuthToken[];
}