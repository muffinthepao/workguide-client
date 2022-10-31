import Joi from "joi";

export const UrlSchema = Joi.object ({
    email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).label("Email").required(),
    password: Joi.string().min(4).label("Password").required(),
})