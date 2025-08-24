import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { RestoransEntity } from "../../restorant/entities/restorans.entity";
import { DishInfoEntity } from "./dish_info.entity";

@Entity("dishes")
export class DishesEntity {
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

	@Column("int")
	time: number;

	@Column("decimal", { precision: 3, scale: 1 })
	stars: number;

	@Column("decimal", { precision: 6, scale: 2, default: 0 })
	price: number;

	@CreateDateColumn()
	create_at: Date;

	@UpdateDateColumn()
	updated_ad: Date;

	@ManyToOne(() => RestoransEntity, (restoransEntity) => restoransEntity.dishes)
	@JoinColumn({ name: "restoran_id" })
	restorans: RestoransEntity;

	@OneToMany(() => DishInfoEntity, (dishInfoEntity) => dishInfoEntity.dishes)
	dishInfo: DishInfoEntity;
}
