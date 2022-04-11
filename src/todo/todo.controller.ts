import { Body, Controller, Get, Req, UseGuards, Post, Delete, Param, Put } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guard/auth.guard";
import { ItemDto } from "./dto/item.dto";
import { TodoService } from "./service/todo.service";
import { Request } from "express";
import { ItemCheckedDto } from "./dto/item-checked.dto";

@Controller()
export class TodoController {
    constructor(private todoService: TodoService) {};

    @Get()
    @UseGuards(JwtAuthGuard)
    async getItems(@Req() req: Request) {
        const items = await this.todoService.getItems(req.user["_id"]);

        return { message: items };
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async saveItem(@Req() req: Request, @Body() item: ItemDto) {
        await this.todoService.saveItem(item, req.user["_id"]);

        return;
    }

    @Put(":idItem")
    @UseGuards(JwtAuthGuard)
    async checkedItem(@Param("idItem") id: string, @Body() body: ItemCheckedDto) {
        await this.todoService.checkedItem(id, body.checked);

        return;
    }

    @Delete(":idItem")
    @UseGuards(JwtAuthGuard)
    async deleteItem(@Param("idItem") id: string) {
        await this.todoService.deleteItem(id);

        return;
    }
}