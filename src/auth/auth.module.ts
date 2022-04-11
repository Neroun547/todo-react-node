import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./service/auth.service";
import { JwtStrategy } from "./jwt.strategy"; 
import { UserModuleDb } from "db/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { secretJwt } from "config.json";

@Module({
    imports: [UserModuleDb,
        JwtModule.register({
        secret: secretJwt,
        signOptions: { expiresIn: '6h' },
      })
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {};
