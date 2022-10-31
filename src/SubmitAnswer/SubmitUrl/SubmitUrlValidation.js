import Joi from "joi";

export const UrlSchema = Joi.object ({
    url: Joi.string().uri().trim().label("URL Answer").required(),

})