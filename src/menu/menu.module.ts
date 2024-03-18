import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { Menu, MenuSchema } from "./schema/menu.schema";
import { MenuController } from "./menu.controller";
import { MenuService } from "./menu.service";

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }]),
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
