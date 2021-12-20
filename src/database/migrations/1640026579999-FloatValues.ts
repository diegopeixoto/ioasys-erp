import { MigrationInterface, QueryRunner } from 'typeorm'

export class FloatValues1640026579999 implements MigrationInterface {
    name = 'FloatValues1640026579999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "cost"`)
        await queryRunner.query(`ALTER TABLE "product" ADD "cost" double precision NOT NULL`)
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "value"`)
        await queryRunner.query(`ALTER TABLE "product" ADD "value" double precision NOT NULL`)
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "total"`)
        await queryRunner.query(`ALTER TABLE "sale" ADD "total" double precision NOT NULL`)
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "paid"`)
        await queryRunner.query(`ALTER TABLE "sale" ADD "paid" double precision NOT NULL`)
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "change"`)
        await queryRunner.query(`ALTER TABLE "sale" ADD "change" double precision NOT NULL`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "change"`)
        await queryRunner.query(`ALTER TABLE "sale" ADD "change" integer NOT NULL`)
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "paid"`)
        await queryRunner.query(`ALTER TABLE "sale" ADD "paid" integer NOT NULL`)
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "total"`)
        await queryRunner.query(`ALTER TABLE "sale" ADD "total" integer NOT NULL`)
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "value"`)
        await queryRunner.query(`ALTER TABLE "product" ADD "value" integer NOT NULL`)
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "cost"`)
        await queryRunner.query(`ALTER TABLE "product" ADD "cost" integer NOT NULL`)
    }
}
