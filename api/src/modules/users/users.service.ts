import { Inject, Injectable } from "@nestjs/common";
import { User } from "src/entities/user/users.entity";
import { DataSource } from "typeorm";

@Injectable()
export class UsersService {
	constructor(
		@Inject("DATA_SOURCE")
		private readonly dataSource: DataSource,
	) {}

  async create(user: Partial<User>): Promise<User> {
		return this.dataSource.getRepository(User).create(user)
	}

	async findOne(email: string): Promise<User | null> {
		return this.dataSource.getRepository(User).findOne({ where: { email } })
	}

	async findById(id: string): Promise<User | null> {
		return this.dataSource.getRepository(User).findOne({ where: { id } })
	}
}
