import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";

@Entity("auth_token")
export class AuthToken {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  jwt_token: string;

  @ManyToOne(() => User, (user) => user.authToken)
  user: User;
}