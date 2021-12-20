import { MigrationInterface, QueryRunner } from 'typeorm'

export class EmployeeOccupationProductSaleTableSchemas1640022827932 implements MigrationInterface {
    name = 'EmployeeOccupationProductSaleTableSchemas1640022827932'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "occupation" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "occupation" character varying NOT NULL, "wage" integer NOT NULL, CONSTRAINT "UQ_4244c4864750c0de2f23726d4c4" UNIQUE ("occupation"), CONSTRAINT "PK_07cfcefef555693d96dce8805c5" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "employee" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "document" character varying NOT NULL, "occupation" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_8438ee28d3a542b106dcd8d7289" UNIQUE ("document"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "product" character varying NOT NULL, "cost" integer NOT NULL, "value" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_548a70bf2f9e5306341b383c15a" UNIQUE ("product"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "table_number" integer NOT NULL, "chairs" integer NOT NULL, "vip" boolean NOT NULL, CONSTRAINT "UQ_c48bd46b3649f4cdcb934d6a593" UNIQUE ("table_number"), CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "name"`)
        await queryRunner.query(
            `ALTER TABLE "employee" DROP CONSTRAINT "UQ_8438ee28d3a542b106dcd8d7289"`
        )
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "document"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "occupation"`)
        await queryRunner.query(`ALTER TABLE "employee" ADD "name" character varying NOT NULL`)
        await queryRunner.query(`ALTER TABLE "employee" ADD "document" character varying NOT NULL`)
        await queryRunner.query(
            `ALTER TABLE "employee" ADD CONSTRAINT "UQ_8438ee28d3a542b106dcd8d7289" UNIQUE ("document")`
        )
        await queryRunner.query(
            `ALTER TABLE "employee" ADD "occupation" character varying NOT NULL`
        )
        await queryRunner.query(`ALTER TABLE "employee" ADD "products" jsonb NOT NULL`)
        await queryRunner.query(`ALTER TABLE "employee" ADD "total" integer NOT NULL`)
        await queryRunner.query(`ALTER TABLE "employee" ADD "table" integer NOT NULL`)
        await queryRunner.query(`ALTER TABLE "employee" ADD "hostess" character varying NOT NULL`)
        await queryRunner.query(
            `ALTER TABLE "employee" ADD "payment_type" character varying NOT NULL`
        )
        await queryRunner.query(`ALTER TABLE "employee" ADD "paid" integer NOT NULL`)
        await queryRunner.query(`ALTER TABLE "employee" ADD "change" integer NOT NULL`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "change"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "paid"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "payment_type"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "hostess"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "table"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "total"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "products"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "occupation"`)
        await queryRunner.query(
            `ALTER TABLE "employee" DROP CONSTRAINT "UQ_8438ee28d3a542b106dcd8d7289"`
        )
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "document"`)
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "name"`)
        await queryRunner.query(
            `ALTER TABLE "employee" ADD "occupation" character varying NOT NULL`
        )
        await queryRunner.query(`ALTER TABLE "employee" ADD "document" character varying NOT NULL`)
        await queryRunner.query(
            `ALTER TABLE "employee" ADD CONSTRAINT "UQ_8438ee28d3a542b106dcd8d7289" UNIQUE ("document")`
        )
        await queryRunner.query(`ALTER TABLE "employee" ADD "name" character varying NOT NULL`)
        await queryRunner.query(`DROP TABLE "table"`)
        await queryRunner.query(`DROP TABLE "product"`)
        await queryRunner.query(`DROP TABLE "employee"`)
        await queryRunner.query(`DROP TABLE "occupation"`)
    }
}
