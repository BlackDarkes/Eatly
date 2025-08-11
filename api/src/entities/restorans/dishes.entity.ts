import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restorans } from "./restorans.entity";

@Entity("dishes")
export class Dishes {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  img: string;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column()
  time: string;

  @Column()
  price: string;

  @ManyToOne(() => Restorans, (restorans) => restorans.dishes)
  restorans: Restorans;
}