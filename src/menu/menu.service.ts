import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Menu } from "./schema/menu.schema";
import { MenuResponse } from "./response/menu.response";
import { MenuCreateDto } from "./dto/menu-create.dto";
import { listToTree } from "../util/mongo.util";
import { MenuUpdateDto } from "./dto/menu-update.dto";

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<Menu>) {}
  async createMenu(dto: MenuCreateDto): Promise<MenuResponse> {
    const createdMenu = await this.menuModel.create(dto);
    return {
      id: createdMenu._id.toString(),
      name: createdMenu.name,
      icon: createdMenu.icon,
      description: createdMenu.description,
    } as MenuResponse;
  }
  async getMenus(): Promise<MenuResponse[]> {
    const menus = await this.menuModel
      .aggregate([
        {
          $project: {
            _id: 0,
            id: "$_id",
            name: "$name",
            description: "$description",
            icon: "$icon",
            parent: "$parent",
          },
        },
      ])
      .then((result) => listToTree(result, "subMenu"));
    return menus as MenuResponse[];
  }
  async updateMenu(id: string, dto: MenuUpdateDto): Promise<void> {
    await this.menuModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      dto,
    );
  }
  async deleteMenu(id: string): Promise<void> {
    await this.menuModel.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}
