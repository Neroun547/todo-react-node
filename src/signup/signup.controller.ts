import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { SignUpService } from "./service/signup.service";

@Controller()
export class SignUpController {
    constructor(private service: SignUpService) {};

    @Post()
    async createAccount(@Body() user: CreateUserDto) {
        await this.service.createUser(user);

        return { message: "User was created" };
    }
}
