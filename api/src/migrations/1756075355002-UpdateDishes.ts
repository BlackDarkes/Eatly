import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDishes1756075355002 implements MigrationInterface {
    name = 'UpdateDishes1756075355002'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dishes" ADD "stars" numeric(3,1)`);
        await queryRunner.query(`ALTER TABLE "dishes" ALTER COLUMN "price" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dishes" ALTER COLUMN "price" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "dishes" DROP COLUMN "stars"`);
    }

}
