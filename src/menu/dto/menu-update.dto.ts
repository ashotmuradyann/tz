import * as Joi from "joi";

export class MenuUpdateDto {
  name?: string;
  description?: string;
  icon?: string;
  parent?: string;
}

export const menuUpdateDtoValidator = Joi.object<MenuUpdateDto>({
  name: Joi.string(),
  description: Joi.string(),
  icon: Joi.string(),
  parent: Joi.string().hex().length(24).allow(null),
});
