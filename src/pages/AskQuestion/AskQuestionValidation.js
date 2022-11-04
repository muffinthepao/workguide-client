import Joi from "joi";

export const Question = Joi.object ({
    question: Joi.string().trim().label("Question").required(),
    // categories: Joi.array().ref(
    //     {
    //         label: Joi.string().required(),
    //         value: Joi.number().required()
    //     }
    // ).label("Categories").required()
})