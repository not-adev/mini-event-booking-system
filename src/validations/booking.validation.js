import Joi from "joi";

export const createBookingSchema = Joi.object({
    user_id: Joi.number().required(),
    event_id: Joi.number().required(),
    tickets_count : Joi.number().min(1).required(),

});