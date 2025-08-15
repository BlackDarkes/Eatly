import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RestoransEntity } from "./restorans.entity";

@Entity("restoran_info")
export class RestoranInfoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  restoran_id: string;

  @Column("varchar", { length: 512 })
  img: string;

  @ManyToOne(() => RestoransEntity, (restoransEntity) => restoransEntity.restoransInfo)
  @JoinColumn({ name: "restoran_id" })
  restorans: RestoransEntity;
}