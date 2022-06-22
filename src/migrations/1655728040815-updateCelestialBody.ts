import { MigrationInterface, QueryRunner } from "typeorm";

export class updateCelestialBody1655728040815 implements MigrationInterface {
    name = 'updateCelestialBody1655728040815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "last_update" SET DEFAULT '"2022-06-20T12:27:42.224Z"'`);
        await queryRunner.query(`ALTER TABLE "data" DROP CONSTRAINT "FK_efb3ba8dace5c3d343909e73bba"`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" DROP CONSTRAINT "FK_ce470f8d1ff8f54f3ba0fbc37f6"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ALTER COLUMN "created_on" SET DEFAULT '"2022-06-20T12:27:44.144Z"'`);
        await queryRunner.query(`ALTER TABLE "data" ADD CONSTRAINT "FK_efb3ba8dace5c3d343909e73bba" FOREIGN KEY ("bodyIdId") REFERENCES "celestial_body"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" ADD CONSTRAINT "FK_ce470f8d1ff8f54f3ba0fbc37f6" FOREIGN KEY ("celestialBodyId") REFERENCES "celestial_body"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" DROP CONSTRAINT "FK_ce470f8d1ff8f54f3ba0fbc37f6"`);
        await queryRunner.query(`ALTER TABLE "data" DROP CONSTRAINT "FK_efb3ba8dace5c3d343909e73bba"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ALTER COLUMN "created_on" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" ADD CONSTRAINT "FK_ce470f8d1ff8f54f3ba0fbc37f6" FOREIGN KEY ("celestialBodyId") REFERENCES "celestial_body"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "data" ADD CONSTRAINT "FK_efb3ba8dace5c3d343909e73bba" FOREIGN KEY ("bodyIdId") REFERENCES "celestial_body"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "last_update" SET DEFAULT '2022-06-17 17:12:24.914'`);
    }

}
