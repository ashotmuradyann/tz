import * as Joi from "joi";

export const paramIdValidator = Joi.string().hex().length(24);
