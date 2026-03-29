import Joi from "joi";

export const createEventSchema = Joi.object({
  title: Joi.string().min(3).max(200).required(),

  description: Joi.string().allow("").optional(),

  event_date: Joi.date().greater("now").required(),

  total_capacity: Joi.number().integer().min(1).required()
});