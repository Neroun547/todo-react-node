import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IItems } from "./interfaces/items.interface";

@Entity()
export class Items implements IItems {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column({ unique: true })
    idItem: string;    

    @Column({ nullable: false })
    content: string;

    @Column({ nullable: false })
    date: Date;

    @Column({ nullable: false })
    checked: boolean;

    @Column()
    sender: number;
}