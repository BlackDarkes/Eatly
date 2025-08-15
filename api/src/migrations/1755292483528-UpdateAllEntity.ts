import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateAllEntity1755292483528 implements MigrationInterface {
    name = 'UpdateAllEntity1755292483528'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" SET DEFAULT '/uploading/users/avatars/'`);
    }

}
