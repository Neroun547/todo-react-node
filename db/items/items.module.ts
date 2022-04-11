import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemsRepository } from "./items.repository";
import { ItemsServiceDb } from "./items.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemsRepository])],
    providers: [ItemsServiceDb],
    exports: [ItemsServiceDb]
})
export class ItemsModuleDb {};
