import { BadRequestException, Injectable } from "@nestjs/common";
import { UserServiceDb } from "db/user/user.service";
import { IUser } from "../interfaces/user.interface";
import * as bcrypt from "bcrypt";

@Injectable()
export class SignUpService {
    constructor(private userServiceDb: UserServiceDb) {};

    async createUser(user: IUser) {
        const existsTheSameUser = await this.userServiceDb.existsTheSameUser(user.email, user.username);

        if(existsTheSameUser) {
            throw new BadRequestException({message: ["User the same params already exists"]});
        }
        const hash = await bcrypt.hash(user.password, 10);

        const saveUser = {
            ...user,
            password: hash
        }
        await this.userServiceDb.createUser(saveUser);
    }
}
