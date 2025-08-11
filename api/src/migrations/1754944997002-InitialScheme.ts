import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialScheme1754944997002 implements MigrationInterface {
    name = 'InitialScheme1754944997002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "purchases" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "product_ids" text array NOT NULL, CONSTRAINT "PK_1d55032f37a34c6eceacbbca6b8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "auth_token" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "jwt_token" text NOT NULL, CONSTRAINT "PK_4572ff5d1264c4a523f01aa86a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "purchases_history" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "history" text array NOT NULL, "price" character varying(255) NOT NULL, CONSTRAINT "PK_2c0cc5021711c04c8b011ff08e1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "feedback" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user_id" uuid NOT NULL, "type" character varying(255) NOT NULL, "avatar" character varying(512) NOT NULL, "fullname" character varying(255) NOT NULL, "date" character varying(255) NOT NULL, "message" character varying(255) NOT NULL, "stars" numeric(3,1) NOT NULL, CONSTRAINT "PK_8389f9e087a57689cd5be8b2b13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullname" character varying(255) NOT NULL, "email" character varying NOT NULL, "password_hash" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "subscriptions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "support" boolean NOT NULL DEFAULT true, "fast_delivery" boolean NOT NULL DEFAULT true, "discount" boolean NOT NULL DEFAULT true, "transaction_history" boolean NOT NULL DEFAULT true, "weekend_deals" boolean NOT NULL DEFAULT false, "dashboard_access" boolean NOT NULL DEFAULT false, "premium_group" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a87248d73155605cf782be9ee5e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dish_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "dishes_id" uuid NOT NULL, "img" character varying(512) NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_b74a05252462ef499211432b457" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dishes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "restoran_id" uuid NOT NULL, "img" character varying(512) NOT NULL, "type" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "time" character varying(255) NOT NULL, "price" character varying(255) NOT NULL, CONSTRAINT "PK_f4748c8e8382ad34ef517520b7b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restorans" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "img" character varying(512) NOT NULL, "type" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "time" character varying(255) NOT NULL, "stars" numeric(3,1) NOT NULL, CONSTRAINT "PK_72d346be3551b0a495219f2b7e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restoran_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "restoran_id" uuid NOT NULL, "img" character varying(512) NOT NULL, CONSTRAINT "PK_e1aec975a03c038552dd6b6eecb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "articles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "img" character varying(512) NOT NULL, "title" character varying(255) NOT NULL, "avatar" character varying(512) NOT NULL, "name" character varying(255) NOT NULL, "date" character varying(255) NOT NULL, CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "article_info" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "article_id" uuid NOT NULL, "titles" text array NOT NULL, "information" text array NOT NULL, CONSTRAINT "PK_86af1cda219de6ee6433c5c4722" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD CONSTRAINT "FK_024ddf7e04177a07fcb9806a90a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "auth_token" ADD CONSTRAINT "FK_26b580c89e141c75426f44317bc" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "purchases_history" ADD CONSTRAINT "FK_a908470bbcd6dd09a3c2e0a1958" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD CONSTRAINT "FK_121c67d42dd543cca0809f59901" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dish_info" ADD CONSTRAINT "FK_6904b23197fbd20ac44126739ff" FOREIGN KEY ("dishes_id") REFERENCES "dishes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "dishes" ADD CONSTRAINT "FK_235df5211a380e87cc86d1924f8" FOREIGN KEY ("restoran_id") REFERENCES "restorans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "restoran_info" ADD CONSTRAINT "FK_cdadcd9a449672095bb4dc92957" FOREIGN KEY ("restoran_id") REFERENCES "restorans"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article_info" ADD CONSTRAINT "FK_dcf7b41063ab4d7ee609b6f954a" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_info" DROP CONSTRAINT "FK_dcf7b41063ab4d7ee609b6f954a"`);
        await queryRunner.query(`ALTER TABLE "restoran_info" DROP CONSTRAINT "FK_cdadcd9a449672095bb4dc92957"`);
        await queryRunner.query(`ALTER TABLE "dishes" DROP CONSTRAINT "FK_235df5211a380e87cc86d1924f8"`);
        await queryRunner.query(`ALTER TABLE "dish_info" DROP CONSTRAINT "FK_6904b23197fbd20ac44126739ff"`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP CONSTRAINT "FK_121c67d42dd543cca0809f59901"`);
        await queryRunner.query(`ALTER TABLE "purchases_history" DROP CONSTRAINT "FK_a908470bbcd6dd09a3c2e0a1958"`);
        await queryRunner.query(`ALTER TABLE "auth_token" DROP CONSTRAINT "FK_26b580c89e141c75426f44317bc"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP CONSTRAINT "FK_024ddf7e04177a07fcb9806a90a"`);
        await queryRunner.query(`DROP TABLE "article_info"`);
        await queryRunner.query(`DROP TABLE "articles"`);
        await queryRunner.query(`DROP TABLE "restoran_info"`);
        await queryRunner.query(`DROP TABLE "restorans"`);
        await queryRunner.query(`DROP TABLE "dishes"`);
        await queryRunner.query(`DROP TABLE "dish_info"`);
        await queryRunner.query(`DROP TABLE "subscriptions"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "feedback"`);
        await queryRunner.query(`DROP TABLE "purchases_history"`);
        await queryRunner.query(`DROP TABLE "auth_token"`);
        await queryRunner.query(`DROP TABLE "purchases"`);
    }

}
