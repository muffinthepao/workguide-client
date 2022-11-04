import Joi from "joi";

export const UrlSchema = Joi.object ({
    answerUrl: Joi.string().uri().trim().label("URL Answer").required(),
})