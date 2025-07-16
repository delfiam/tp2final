import Joi from "joi";

export const schema = Joi.object({
    id: Joi.string().pattern(/^[A-Z]{3}\d{3}$/).required(),
    xa: Joi.number().min(0).required(),
    ya: Joi.number().min(0).required(),
    za: Joi.number().min(0).required()
});
export const schemaPatch = Joi.object({
    xa: Joi.number().min(0),
    ya: Joi.number().min(0),
    za: Joi.number().min(0)
}).or('xa', 'ya', 'za');
