import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DishesEntity } from "./dishes.entity";

@Entity("dish_info")
export class DishInfoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  dishes_id: string;

  @Column("varchar", { length: 512 })
  img: string;

  @Column("text")
  description: string

  @ManyToOne(() => DishesEntity, (dishesEntity) => dishesEntity.dishInfo)
  @JoinColumn({ name: "dishes_id" })
  dishes: DishesEntity;
}