import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersEntity } from "src/modules/user/entities/users.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UsersEntity)
		private readonly usersRepository: Repository<UsersEntity>
	) {}

	async create(user: Partial<UsersEntity>): Promise<UsersEntity> {
		const newUser = this.usersRepository.create(user);
		return this.usersRepository.save(newUser);
	}

	async findOne(email: string): Promise<UsersEntity | null> {
		return this.usersRepository.findOne({ where: { email } });
	}

	async findById(id: string): Promise<UsersEntity | null> {
		return this.usersRepository.findOne({ where: { id } });
	}
}
