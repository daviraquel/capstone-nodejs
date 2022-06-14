import { MigrationInterface, QueryRunner } from "typeorm";

export class createTabels1655138888972 implements MigrationInterface {
    name = 'createTabels1655138888972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "data" ("id" uuid NOT NULL, "description" character varying NOT NULL, "mass" integer NOT NULL, "volume" integer NOT NULL, "distance_to_earth" integer NOT NULL, "last_update" TIMESTAMP NOT NULL, "bodyIdId" uuid, CONSTRAINT "REL_efb3ba8dace5c3d343909e73bb" UNIQUE ("bodyIdId"), CONSTRAINT "PK_2533602bd9247937e3a4861e173" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "galaxy" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "password" character varying NOT NULL, "creatorId" uuid, CONSTRAINT "PK_58575ecf54ca22d898af3adf632" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "celestial_body" ("id" uuid NOT NULL, "name" character varying NOT NULL, "created_on" TIMESTAMP NOT NULL, "dataId" uuid, "creatorId" uuid, "categoryId" uuid, "galaxyId" uuid, CONSTRAINT "REL_63df63fd536722b3d2bc6a675f" UNIQUE ("dataId"), CONSTRAINT "PK_4a07523f8c3773482e5fe8dd143" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cosmonaut_studied_bodies_celestial_body" ("cosmonautId" uuid NOT NULL, "celestialBodyId" uuid NOT NULL, CONSTRAINT "PK_62d3f81350f058854e7ac41f503" PRIMARY KEY ("cosmonautId", "celestialBodyId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7c4031fa0fe72f42d5f12f0c36" ON "cosmonaut_studied_bodies_celestial_body" ("cosmonautId") `);
        await queryRunner.query(`CREATE INDEX "IDX_ce470f8d1ff8f54f3ba0fbc37f" ON "cosmonaut_studied_bodies_celestial_body" ("celestialBodyId") `);
        await queryRunner.query(`ALTER TABLE "data" ADD CONSTRAINT "FK_efb3ba8dace5c3d343909e73bba" FOREIGN KEY ("bodyIdId") REFERENCES "celestial_body"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "galaxy" ADD CONSTRAINT "FK_727eb0a35f27f1a8469bfab2335" FOREIGN KEY ("creatorId") REFERENCES "cosmonaut"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_63df63fd536722b3d2bc6a675fa" FOREIGN KEY ("dataId") REFERENCES "data"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_fca330dcd5d9f12693c5188554f" FOREIGN KEY ("creatorId") REFERENCES "cosmonaut"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_9c24f53b5607e3bbb2745a412ae" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_c85cdaa645d9557e76b5e6e44a3" FOREIGN KEY ("galaxyId") REFERENCES "galaxy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" ADD CONSTRAINT "FK_7c4031fa0fe72f42d5f12f0c365" FOREIGN KEY ("cosmonautId") REFERENCES "cosmonaut"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" ADD CONSTRAINT "FK_ce470f8d1ff8f54f3ba0fbc37f6" FOREIGN KEY ("celestialBodyId") REFERENCES "celestial_body"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" DROP CONSTRAINT "FK_ce470f8d1ff8f54f3ba0fbc37f6"`);
        await queryRunner.query(`ALTER TABLE "cosmonaut_studied_bodies_celestial_body" DROP CONSTRAINT "FK_7c4031fa0fe72f42d5f12f0c365"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_c85cdaa645d9557e76b5e6e44a3"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_9c24f53b5607e3bbb2745a412ae"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_fca330dcd5d9f12693c5188554f"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_63df63fd536722b3d2bc6a675fa"`);
        await queryRunner.query(`ALTER TABLE "galaxy" DROP CONSTRAINT "FK_727eb0a35f27f1a8469bfab2335"`);
        await queryRunner.query(`ALTER TABLE "data" DROP CONSTRAINT "FK_efb3ba8dace5c3d343909e73bba"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ce470f8d1ff8f54f3ba0fbc37f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7c4031fa0fe72f42d5f12f0c36"`);
        await queryRunner.query(`DROP TABLE "cosmonaut_studied_bodies_celestial_body"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "celestial_body"`);
        await queryRunner.query(`DROP TABLE "galaxy"`);
        await queryRunner.query(`DROP TABLE "data"`);
    }

}
