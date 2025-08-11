import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateScheme1754951152262 implements MigrationInterface {
    name = 'UpdateScheme1754951152262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "feedback" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "feedback" DROP COLUMN "fullname"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar" character varying(512)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar"`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD "fullname" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "feedback" ADD "avatar" character varying(512) NOT NULL`);
    }

}
