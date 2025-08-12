import { MigrationInterface, QueryRunner } from "typeorm";

export class UpgradeDishes1755028296731 implements MigrationInterface {
    name = 'UpgradeDishes1755028296731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dishes" ALTER COLUMN "price" TYPE numeric(6,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dishes" ALTER COLUMN "price" TYPE numeric(3,2)`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" DROP NOT NULL`);
    }

}
