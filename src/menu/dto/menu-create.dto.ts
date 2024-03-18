import * as Joi from "joi";

export class MenuCreateDto {
  name: string;
  description: string;
  icon: string;
  parent?: string;
}

export const menuCreateDtoValidator = Joi.object<MenuCreateDto>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  icon: Joi.string().required(),
  parent: Joi.string().hex().length(24),
});
