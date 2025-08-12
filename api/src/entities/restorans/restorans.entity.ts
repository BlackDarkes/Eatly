import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dishes } from "./dishes.entity";
import { RestoranInfo } from "./restoran_info.entity";

@Entity("restorans")
export class Restorans {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 512 })
  img: string;

  @Column("text", { array: true })
  category: string[]

  @Column("varchar", { length: 255 })
  type: string;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("int")
  time: number;

  @Column("decimal", { precision: 3, scale: 1 })
  stars: number;

  @OneToMany(() => Dishes, (dishes) => dishes.restorans)
  dishes: Dishes[];

  @OneToMany(() => RestoranInfo, (restoransInfo) => restoransInfo.restorans)
  restoransInfo: RestoranInfo[];
}