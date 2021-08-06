import {MigrationInterface, QueryRunner} from "typeorm";

export class UserAddAccessToken1628233810144 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user ADD COLUMN token varchar(36);`);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user DROP COLUMN token;`);
    }
}
