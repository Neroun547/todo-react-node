import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { AuthService } from "./service/auth.service";

@Controller()
export class AuthController {
    constructor(private service: AuthService) {};

    @Post()
    async login(@Body() user: LoginDto) {
        const token = await this.service.login(user);

        return {message: token };
    }
}