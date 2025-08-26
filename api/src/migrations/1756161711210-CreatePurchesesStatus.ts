import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePurchesesStatus1756161711210 implements MigrationInterface {
    name = 'CreatePurchesesStatus1756161711210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "purchases_status" ("id" SERIAL NOT NULL, "status" text NOT NULL, CONSTRAINT "PK_bf5ffb3adeb3a4eb480220611e5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD "status" text`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "purchases" ADD "updated_ad" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "dishes" ALTER COLUMN "stars" SET NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dishes" ALTER COLUMN "stars" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP COLUMN "updated_ad"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "purchases" DROP COLUMN "status"`);
        await queryRunner.query(`DROP TABLE "purchases_status"`);
    }

}
