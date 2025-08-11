import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Purchase } from "./purchases.entity";
import { AuthToken } from "./auth_token.entity";
import { PurchasesHistory } from "./purchases_history.entity";
import { Feedback } from "./feedback.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column("varchar", { length: 255 })
  fullname: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password_hash: string;

  @OneToMany(() => Purchase, (purchase) => purchase.user)
  purchases: Purchase[];

  @OneToMany(() => PurchasesHistory, (purchasesHistory) => purchasesHistory.user)
  purchasesHistory: PurchasesHistory[];

  @OneToMany(() => AuthToken, (authToken) => authToken.user)
  authTokens: AuthToken[];

  @OneToMany(() => Feedback, (feedback) => feedback.user)
  feedbacks: Feedback[];
}