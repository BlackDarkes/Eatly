import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export async function getTypeOrmConfig(configService: ConfigService): Promise<TypeOrmModuleOptions> {
  return {
    type: "postgres",
    host: configService.getOrThrow<string>("POSTGRES_HOST"),
    port: configService.getOrThrow<number>("POSTGRES_PORT"),
    username: configService.getOrThrow<string>("POSTGRES_USER"),
    password: configService.getOrThrow("POSTGRES_PASSWORD"),
    database: configService.getOrThrow("POSTGRES_DATABASE"),
    entities: ["dist/modules/**/entities/*.entity.{ts,js}"],
    migrations: ["dist/migrations/*.{ts,js}"],
    synchronize: false,
    logging: true,
  }
}