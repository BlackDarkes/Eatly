import{ DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  username:  process.env.DB_USER || "postgres",
  password:  process.env.DB_PASSWORD || "1234",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT!) || 5432,
  database: process.env.DB_NAME || "eatly",
  entities: [__dirname + "/../entities/*/*.entity.ts"],
  migrations: [__dirname + "/../migrations/*.ts"],
  synchronize: true,
  logging: true,
});

export const DatabaseSource = [
  {
    provide: "DATABASE_SOURCE",
    useFactory: async () => {
      return await AppDataSource.initialize();
    }
  }
]