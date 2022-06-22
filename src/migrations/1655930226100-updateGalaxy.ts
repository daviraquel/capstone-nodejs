import { MigrationInterface, QueryRunner } from "typeorm";

export class updateGalaxy1655930226100 implements MigrationInterface {
    name = 'updateGalaxy1655930226100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "last_update" SET DEFAULT '"2022-06-22T20:37:12.095Z"'`);
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_c85cdaa645d9557e76b5e6e44a3"`);
        await queryRunner.query(`ALTER TABLE "galaxy" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ALTER COLUMN "created_on" SET DEFAULT '"2022-06-22T20:37:12.336Z"'`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_c85cdaa645d9557e76b5e6e44a3" FOREIGN KEY ("galaxyId") REFERENCES "galaxy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_c85cdaa645d9557e76b5e6e44a3"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ALTER COLUMN "created_on" SET DEFAULT '2022-06-20 12:27:44.144'`);
        await queryRunner.query(`ALTER TABLE "galaxy" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_c85cdaa645d9557e76b5e6e44a3" FOREIGN KEY ("galaxyId") REFERENCES "galaxy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "data" ALTER COLUMN "last_update" SET DEFAULT '2022-06-20 12:27:42.224'`);
    }

}
