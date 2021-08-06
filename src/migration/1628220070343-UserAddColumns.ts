import {MigrationInterface, QueryRunner} from "typeorm";

export class UserAddColumns1628220070343 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // 72 just in case
        await queryRunner.query(`ALTER TABLE user ADD COLUMN password varchar(72);`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user DROP COLUMN password;`);
    }

}
