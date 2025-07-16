import Joi from "joi";

const schema = Joi.object({
    id: Joi.string().pattern(/^[A-Z]{3}\d{3}$/).required(),
    xa: Joi.number().positive().required(),
    ya: Joi.number().positive().required(),
    za: Joi.number().positive().required()
});

export default schema;