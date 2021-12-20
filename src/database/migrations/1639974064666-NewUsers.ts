import { MigrationInterface, QueryRunner } from 'typeorm'

export class NewUsers1639974064666 implements MigrationInterface {
    name = 'NewUsers1639974064666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" character varying NOT NULL, CONSTRAINT "UQ_367aad98203bd8afaed0d704093" UNIQUE ("role"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "user" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9ec886924bcd97ae6f14220017a" UNIQUE ("user"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`)
        await queryRunner.query(`DROP TABLE "role"`)
    }
}
