import { IsBoolean, IsNotEmpty } from "class-validator";

export class ItemCheckedDto {
    @IsNotEmpty()
    @IsBoolean()
    checked: boolean;
}