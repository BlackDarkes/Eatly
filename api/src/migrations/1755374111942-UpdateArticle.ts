import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateArticle1755374111942 implements MigrationInterface {
    name = 'UpdateArticle1755374111942'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_info" ADD "main_image" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_info" DROP COLUMN "main_image"`);
    }

}
