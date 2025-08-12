import { MigrationInterface, QueryRunner } from "typeorm";

export class UpgradeUser1755042447385 implements MigrationInterface {
    name = 'UpgradeUser1755042447385'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" SET NOT NULL`);
    }

}
