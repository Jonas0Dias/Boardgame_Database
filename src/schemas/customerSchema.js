import Joi from "joi";

export const createCustomer =Joi.object({
  cpf: Joi.string().length(11).regex(/^[0-9]+$/).required(),
  phone: Joi.string().regex(/^[0-9]+$/).min(10).max(11),
  name: Joi.string().trim().min(1).required(),
  birthday: Joi.date().iso().required(),
});

