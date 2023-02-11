import Joi from "joi";

export const createCustomer = Joi.object({
  cpf: Joi.string().length(11).pattern(/^\d+$/).required(),
  phone: Joi.string().length(10, 11).pattern(/^\d+$/).required(),
  name: Joi.string().trim().min(1).required(),
  birthday: Joi.date().iso().required(),
});

