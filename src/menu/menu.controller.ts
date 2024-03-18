import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { MenuResponse } from "./response/menu.response";
import { MenuService } from "./menu.service";
import { JoiValidationPipe } from "../options/joi/joi-validation.pipe";
import { MenuCreateDto, menuCreateDtoValidator } from "./dto/menu-create.dto";
import { MenuUpdateDto, menuUpdateDtoValidator } from "./dto/menu-update.dto";

@Controller("menu")
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async createMenu(
    @Body(new JoiValidationPipe(menuCreateDtoValidator)) dto: MenuCreateDto,
  ): Promise<MenuResponse> {
    return this.menuService.createMenu(dto);
  }
  @Get()
  async getMenus(): Promise<MenuResponse[]> {
    return this.menuService.getMenus();
  }
  @Patch(":id")
  async updateMenu(
    @Param("id") id: string,
    @Body(new JoiValidationPipe(menuUpdateDtoValidator)) dto: MenuUpdateDto,
  ): Promise<void> {
    await this.menuService.updateMenu(id, dto);
  }
  @Delete(":id")
  async deleteMenu(@Param("id") id: string): Promise<void> {
    await this.menuService.deleteMenu(id);
  }
}
