import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { DishesEntity } from "../../dish/entities/dishes.entity";
import { RestoranInfoEntity } from "./restoran_info.entity";

@Entity("restorans")
export class RestoransEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("varchar", { length: 512 })
	img: string;

	@Column("text", { array: true })
	category: string[];

	@Column("varchar", { length: 255 })
	type: string;

	@Column("varchar", { length: 255 })
	name: string;

	@Column("int")
	time: number;

	@Column("decimal", { precision: 3, scale: 1 })
	stars: number;

	@CreateDateColumn()
	create_at: Date;

	@UpdateDateColumn()
	updated_ad: Date;

	@OneToMany(() => DishesEntity, (dishesEntity) => dishesEntity.restorans)
	dishes: DishesEntity[];

	@OneToMany(
		() => RestoranInfoEntity,
		(restoransInfoEntity) => restoransInfoEntity.restorans,
	)
	restoransInfo: RestoranInfoEntity[];
}
