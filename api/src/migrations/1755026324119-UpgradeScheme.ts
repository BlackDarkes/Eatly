import { MigrationInterface, QueryRunner } from "typeorm";

export class UpgradeScheme1755026324119 implements MigrationInterface {
    name = 'UpgradeScheme1755026324119'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "user_id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restorans" ADD "category" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dishes" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "dishes" ADD "time" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dishes" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "dishes" ADD "price" numeric(3,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restorans" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "restorans" ADD "time" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "articles" ADD CONSTRAINT "FK_87bb15395540ae06337a486a77a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "articles" DROP CONSTRAINT "FK_87bb15395540ae06337a486a77a"`);
        await queryRunner.query(`ALTER TABLE "restorans" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "restorans" ADD "time" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dishes" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "dishes" ADD "price" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dishes" DROP COLUMN "time"`);
        await queryRunner.query(`ALTER TABLE "dishes" ADD "time" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "restorans" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "name" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "articles" ADD "avatar" character varying(512) NOT NULL`);
    }

}
