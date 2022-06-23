import { MigrationInterface, QueryRunner } from "typeorm";

export class newUpdateGalaxy1655956902750 implements MigrationInterface {
    name = 'newUpdateGalaxy1655956902750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "last_update" SET DEFAULT '"2022-06-23T04:01:47.045Z"'`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ALTER COLUMN "created_on" SET DEFAULT '"2022-06-23T04:01:47.267Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "celestial_body" ALTER COLUMN "created_on" SET DEFAULT '2022-06-22 20:37:12.336'`);
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "last_update" SET DEFAULT '2022-06-22 20:37:12.095'`);
    }

}
