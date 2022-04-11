import { Injectable } from "@nestjs/common";  
import { IItems } from "./interfaces/items.interface";
import { Items } from "./items.entity";
import { ItemsRepository } from "./items.repository";

@Injectable()
export class ItemsServiceDb {
    constructor(private repository: ItemsRepository) {};

    async saveItem(item: IItems) {
        await this.repository.save(item);
    }

    async getItems(sender: number) {
        return await this.repository.find({ sender });
    }

    async deleteItem(idItem: string) {
        await this.repository.delete({ idItem });
    }

    async checkedItem(idItem: string, checked: boolean) {
        await this.repository.createQueryBuilder()
        .update(Items)
        .set({
            checked: checked
        })
        .where("idItem = :idItem", { idItem: idItem })
        .execute()
    }
}
