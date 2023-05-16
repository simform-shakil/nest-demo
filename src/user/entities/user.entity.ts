import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age: number;
}
