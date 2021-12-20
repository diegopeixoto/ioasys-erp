import {MigrationInterface, QueryRunner} from "typeorm";

export class CostProfit1640030060523 implements MigrationInterface {
    name = 'CostProfit1640030060523'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" ADD "cost" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sale" ADD "profit" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "profit"`);
        await queryRunner.query(`ALTER TABLE "sale" DROP COLUMN "cost"`);
    }

}
