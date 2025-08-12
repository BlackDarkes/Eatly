import { MigrationInterface, QueryRunner } from "typeorm";

export class UpgradeArticle1755031066336 implements MigrationInterface {
    name = 'UpgradeArticle1755031066336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_info" RENAME COLUMN "moreInformation" TO "more_info"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article_info" RENAME COLUMN "more_info" TO "moreInformation"`);
    }

}
