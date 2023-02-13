import Joi from "joi";

export const createGameSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().uri().required(),
  stockTotal: Joi.number().required().min(1),
  pricePerDay: Joi.number().required().positive(),
});