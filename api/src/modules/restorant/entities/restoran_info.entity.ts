import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restorans } from "./restorans.entity";

@Entity("restoran_info")
export class RestoranInfo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  restoran_id: string;

  @Column("varchar", { length: 512 })
  img: string;

  @ManyToOne(() => Restorans, (restorans) => restorans.restoransInfo)
  @JoinColumn({ name: "restoran_id" })
  restorans: Restorans;
}