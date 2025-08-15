import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "src/modules/user/entities/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UsersEntity)
		private readonly usersRepository: Repository<UsersEntity>,
	) {}

	async create(user: Partial<UsersEntity>): Promise<UsersEntity> {
		const newUser = this.usersRepository.create(user);
		return this.usersRepository.save(newUser);
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
}
