import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserServiceDb } from "db/user/user.service";
import { ILogin } from "../interfaces/login.interface";
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private userServiceDb: UserServiceDb, private jwtService: JwtService) {};

    async login(user: ILogin) {
        const userInDb = await this.userServiceDb.getUserByUserName(user.username);

        if(userInDb) {
            const checkPassword = await bcrypt.compare(user.password, userInDb.password);
            
            if(checkPassword) {
                return this.jwtService.sign({...userInDb});
            }

            if(!checkPassword) {
                throw new BadRequestException({message: ["Bad password"] });
            }
        }

        if(!userInDb) {
            throw new NotFoundException({message: ["User not found"] });
        }
    }
}
