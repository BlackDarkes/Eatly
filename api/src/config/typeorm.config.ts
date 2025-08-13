import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export async function getTypeOrmConfig(configService: ConfigService): Promise<TypeOrmModuleOptions> {
  return {
    type: "postgres",
    host: configService.getOrThrow<string>("POSTGRES_HOST"),
    port: configService.getOrThrow<number>("POSTGRES_PORT"),
    username: configService.getOrThrow<string>("POSTGRES_USER"),
    password: configService.getOrThrow("POSTGRES_PASSWORD"),
    database: configService.getOrThrow("POSTGRES_DATABASE"),
    entities: [join(__dirname, "/../modules/**/entities/*.entity.ts")],
    migrations: [__dirname + "/../migrations/*.ts"],
    synchronize: false,
    logging: true,
  }
}