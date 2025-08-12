import { Inject, Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class UsersService {
	constructor(
		@Inject("DATA_SOURCE")
		private readonly dataSource: DataSource,
	) {}

  
}
