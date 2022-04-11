import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "./user.repository";
import { UserServiceDb } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository])],
    providers: [UserServiceDb],
    exports: [UserServiceDb]
})
export class UserModuleDb {};