import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSupport1755297147525 implements MigrationInterface {
    name = 'CreateSupport1755297147525'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "support" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullname" character varying(255) NOT NULL, "email" character varying(255) NOT NULL, "message" text NOT NULL, CONSTRAINT "PK_54c6021e6f6912eaaee36b3045d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "avatar" SET DEFAULT '/uploading/users/avatars/'`);
        await queryRunner.query(`DROP TABLE "support"`);
    }

}
