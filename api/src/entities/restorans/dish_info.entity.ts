import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dishes } from "./dishes.entity";

@Entity("dish_info")
export class DishInfo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  dishes_id: string;

  @Column("varchar", { length: 512 })
  img: string;

  @Column("text")
  description: string

  @ManyToOne(() => Dishes, (dishes) => dishes.dishInfo)
  @JoinColumn({ name: "dishes_id" })
  dishes: Dishes;
}