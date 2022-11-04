import Joi from "joi";

export const SchemaJoin = Joi.object ({
    joinFullName: Joi.string().min(3).max(30).label("Full Name").required(),
    joinPreferredName: Joi.string().min(3).max(30).label("Preferred Name").required(),
    joinEmail: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).label("Email").required(),
    joinPassword: Joi.string().min(3).label("Password").required(),
    joinConfirmPassword: Joi.string().equal(Joi.ref("joinPassword")).required()
    .label('Confirm Password')
    .messages({ 'any.only': '{{#label}} does not match' })
})