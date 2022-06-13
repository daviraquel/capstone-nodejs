import { MigrationInterface, QueryRunner } from "typeorm";

export class initialCommit1655138155303 implements MigrationInterface {
    name = 'initialCommit1655138155303'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cosmonaut" ("id" uuid NOT NULL, "user_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_ffe42e3a8dc75c9db7de64e02a5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "cosmonaut"`);
    }

}
