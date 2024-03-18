import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { mongooseModuleAsyncOptions } from "./options/mongoose/mongoose-module-async.options";
import { MenuModule } from "./menu/menu.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync(mongooseModuleAsyncOptions),
    MenuModule,
  ],
})
export class AppModule {}
