import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "src/modules/user/entities/users.entity";
import { Repository } from "typeorm";
import { PurchasesEntity } from "./entities/purchases.entity";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UsersEntity)
		private readonly usersRepository: Repository<UsersEntity>,
		@InjectRepository(PurchasesEntity)
		private readonly purchasesRepository: Repository<PurchasesEntity>,
	) {}

	async create(user: Partial<UsersEntity>): Promise<UsersEntity> {
		const newUser = this.usersRepository.create(user);
		const savedUser = await this.usersRepository.save(newUser);

		return savedUser;
	}

	async findOne(email: string): Promise<UsersEntity | null> {
		return await this.usersRepository.findOne({
			where: { email },
			select: [
				"id",
				"email",
				"password_hash",
				"avatar",
				"create_at",
				"updated_ad",
			],
		});
	}

	async findById(id: string): Promise<UsersEntity | null> {
		return this.usersRepository.findOne({ where: { id } });
	}

	async getAllPurchases(): Promise<PurchasesEntity[]> {
		return this.purchasesRepository.find();
	}

	async getUserPurchases(id: string) {
		return this.purchasesRepository.find({ where: { user_id: id } })
	}
}
