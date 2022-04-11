import { Injectable } from "@nestjs/common";
import { IUser } from "./interfaces/user.interface";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserServiceDb {
    constructor(private readonly repository: UserRepository) {};

    async createUser(user: IUser) {
        await this.repository.save(user);
    }

    async existsTheSameUser(email: string, username: string) {
        return await this.repository.findOne({ where: [{ email }, { username }] });
    }

    async getUserByUserName(username: string) {
        return await this.repository.findOne({ username });
    }
}
