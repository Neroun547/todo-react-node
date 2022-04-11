import { Injectable } from "@nestjs/common";
import { ItemsServiceDb } from "db/items/items.service";
import { IItem } from "../interface/item.interface";

@Injectable()
export class TodoService {
    constructor(private itemsServiceDb: ItemsServiceDb) {};

    async saveItem(item: IItem, sender: number) {
        const saveItem = { ...item, sender: sender };

        await this.itemsServiceDb.saveItem(saveItem);
    }

    async getItems(sender: number) {
        return (await this.itemsServiceDb.getItems(sender)).map(el => ({
            idItem: el.idItem,
            content: el.content,
            checked: el.checked,
            date: el.date
        }));
    }

    async deleteItem(idItem: string) {
        await this.itemsServiceDb.deleteItem(idItem);
    }

    async checkedItem(idItem: string, checked: boolean) {
        await this.itemsServiceDb.checkedItem(idItem, checked);
    }
}
