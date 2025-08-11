import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Restorans } from "./restorans.entity";
import { DishInfo } from "./dish_info.entity";

@Entity("dishes")
export class Dishes {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  restoran_id: string;

  @Column("varchar", { length: 512 })
  img: string;

  @Column("varchar", { length: 255 })
  type: string;

  @Column("varchar", { length: 255 })
  name: string;

  @Column("varchar", { length: 255 })
  time: string;

  @Column("varchar", { length: 255 })
  price: string;

  @ManyToOne(() => Restorans, (restorans) => restorans.dishes)
  @JoinColumn({ name: "restoran_id" })
  restorans: Restorans;

  @OneToMany(() => DishInfo, (dishInfo) => dishInfo.dishes)
  dishInfo: DishInfo;
}