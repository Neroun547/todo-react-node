import { Module } from "@nestjs/common";
import { TodoController } from "./todo.controller";
import { TodoService } from "./service/todo.service"; 
import { ItemsModuleDb } from "db/items/items.module";

@Module({
    imports: [ItemsModuleDb],
    controllers: [TodoController],
    providers: [TodoService]
})
export class TodoModule {};
