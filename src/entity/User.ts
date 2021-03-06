import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    age: number;
    
    @Column()
    password: string;
    
    @Column()
    username: string;
}
