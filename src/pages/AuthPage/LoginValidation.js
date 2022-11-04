import Joi from "joi";

export const SchemaLogin = Joi.object ({
    loginEmail: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).label("Email").required(),
    loginPassword: Joi.string().min(3).label("Password").required(),
})