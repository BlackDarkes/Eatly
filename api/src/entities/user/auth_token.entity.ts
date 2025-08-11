import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("auth_token")
export class AuthToken {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  user_id: string;

  @Column("text")
  jwt_token: string;

  @ManyToOne(() => User, (user) => user.authTokens)
  @JoinColumn({ name: "user_id" })
  user: User;
}