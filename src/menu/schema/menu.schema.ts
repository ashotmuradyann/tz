import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type CatDocument = HydratedDocument<Menu>;

@Schema()
export class Menu {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  icon: string;
  @Prop({ type: mongoose.Types.ObjectId, ref: "Menu" })
  parent: Menu;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
