import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("support")
export class SupportEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  fullname: string;

  @Column({ type: "varchar", length: 255 })
  email: string;

  @Column({ type: "text" })
  message: string;
}