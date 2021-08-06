import {MigrationInterface, QueryRunner} from "typeorm";

export class SessionsCreateTable1628234651781 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE sessions (
            id int unsigned auto_increment not null primary key,
            created_at DATETIME,
            uuid varchar(36),
            FOREIGN KEY (user_id)
                REFERENCES user(id)
                ON DELETE CASCADE
        );`);
    }
    
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE sessions;`);
    }
}
