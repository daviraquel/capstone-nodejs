import { MigrationInterface, QueryRunner } from "typeorm";

export class updateData1655485927572 implements MigrationInterface {
    name = 'updateData1655485927572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_63df63fd536722b3d2bc6a675fa"`);
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "last_update" SET DEFAULT '"2022-06-17T17:12:24.914Z"'`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_63df63fd536722b3d2bc6a675fa" FOREIGN KEY ("dataId") REFERENCES "data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_63df63fd536722b3d2bc6a675fa"`);
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "last_update" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_63df63fd536722b3d2bc6a675fa" FOREIGN KEY ("dataId") REFERENCES "data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
