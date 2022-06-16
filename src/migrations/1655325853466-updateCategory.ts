import { MigrationInterface, QueryRunner } from "typeorm";

export class updateCategory1655325853466 implements MigrationInterface {
    name = 'updateCategory1655325853466'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "galaxy" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_9c24f53b5607e3bbb2745a412ae"`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "category" ADD CONSTRAINT "UQ_23c05c292c439d77b0de816b500" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_9c24f53b5607e3bbb2745a412ae" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "celestial_body" DROP CONSTRAINT "FK_9c24f53b5607e3bbb2745a412ae"`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "UQ_23c05c292c439d77b0de816b500"`);
        await queryRunner.query(`ALTER TABLE "category" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "celestial_body" ADD CONSTRAINT "FK_9c24f53b5607e3bbb2745a412ae" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "galaxy" ADD "password" character varying NOT NULL`);
    }

}
