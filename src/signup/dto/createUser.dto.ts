import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { IUser } from "../interfaces/user.interface";

export class CreateUserDto implements IUser {
    @IsNotEmpty()
    @Length(1, 30)
    name: string; 

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(3, 20)
    username: string;

    @IsNotEmpty()
    @Length(6, 20)
    password: string;
}