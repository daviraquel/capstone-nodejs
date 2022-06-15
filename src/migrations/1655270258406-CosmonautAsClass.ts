import { MigrationInterface, QueryRunner } from "typeorm";

export class CosmonautAsClass1655270258406 implements MigrationInterface {
    name = 'CosmonautAsClass1655270258406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_fca330dcd5d9f12693c5188554f"`);
        await queryRunner.query(`ALTER TABLE "galaxy" DROP CONSTRAINT "FK_727eb0a35f27f1a8469bfab2335"`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" DROP CONSTRAINT "FK_7c4031fa0fe72f42d5f12f0c365"`);
        await queryRunner.query(`ALTER TABLE "cosmonaut" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "cosmonaut" ADD CONSTRAINT "UQ_5b26204ce4d8f3f27aaa2bde6a6" UNIQUE ("user_name")`);
        await queryRunner.query(`ALTER TABLE "cosmonaut" ADD CONSTRAINT "UQ_2dc70226f53a2989f6cf88e2ff3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "galaxy" ADD CONSTRAINT "FK_727eb0a35f27f1a8469bfab2335" FOREIGN KEY ("creatorId") REFERENCES "cosmonaut"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_fca330dcd5d9f12693c5188554f" FOREIGN KEY ("creatorId") REFERENCES "cosmonaut"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" ADD CONSTRAINT "FK_7c4031fa0fe72f42d5f12f0c365" FOREIGN KEY ("cosmonautId") REFERENCES "cosmonaut"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" DROP CONSTRAINT "FK_7c4031fa0fe72f42d5f12f0c365"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_fca330dcd5d9f12693c5188554f"`);
        await queryRunner.query(`ALTER TABLE "galaxy" DROP CONSTRAINT "FK_727eb0a35f27f1a8469bfab2335"`);
        await queryRunner.query(`ALTER TABLE "cosmonaut" DROP CONSTRAINT "UQ_2dc70226f53a2989f6cf88e2ff3"`);
        await queryRunner.query(`ALTER TABLE "cosmonaut" DROP CONSTRAINT "UQ_5b26204ce4d8f3f27aaa2bde6a6"`);
        await queryRunner.query(`ALTER TABLE "cosmonaut" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" ADD CONSTRAINT "FK_7c4031fa0fe72f42d5f12f0c365" FOREIGN KEY ("cosmonautId") REFERENCES "cosmonaut"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "galaxy" ADD CONSTRAINT "FK_727eb0a35f27f1a8469bfab2335" FOREIGN KEY ("creatorId") REFERENCES "cosmonaut"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_fca330dcd5d9f12693c5188554f" FOREIGN KEY ("creatorId") REFERENCES "cosmonaut"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
