import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dishes } from "./dishes.entity";

@Entity("restorans")
export class Restorans {
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
  stars: string;

  @OneToMany(() => Dishes, (dishes) => dishes.restorans)
  dishes: Dishes;
}