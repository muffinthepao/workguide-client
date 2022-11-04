import Joi from "joi";

export const Question = Joi.object ({
    question: Joi.string().trim().label("Question").required(),
})