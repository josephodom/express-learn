import {MigrationInterface, QueryRunner} from "typeorm";

export class UserAddUsernameRemoveNames1628232046223 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user ADD COLUMN username varchar(32);`);
        await queryRunner.query(`ALTER TABLE user DROP COLUMN firstName, DROP COLUMN lastName;`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE user DROP COLUMN username;`);
        await queryRunner.query(`ALTER TABLE user ADD COLUMN firstName varchar(255), ADD COLUMN lastName varchar(255);`);
    }

}
