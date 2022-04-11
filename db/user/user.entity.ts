import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"; 
import { IUser } from "./interfaces/user.interface";

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ unique: true })
    email: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;
}
