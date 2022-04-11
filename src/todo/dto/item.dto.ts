import { IsBoolean, IsNotEmpty, IsString, Length } from "class-validator";
import { IItem } from "../interface/item.interface";

export class ItemDto implements IItem {
    @IsNotEmpty()
    @IsString()
    @Length(1, 30)
    content: string;

    @IsBoolean()
    @IsNotEmpty()
    checked: boolean;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    @IsString()
    idItem: string;
}