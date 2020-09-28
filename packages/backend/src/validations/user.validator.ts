import { celebrate, Joi, Segments } from 'celebrate';

export const signupUserValidator = celebrate({
    [Segments.BODY]: Joi.object({
        email: Joi.string()
            .min(8)
            .max(255)
            .required(),
        password: Joi.string()
            .min(8)
            .max(255)
            .required(),
        firstName: Joi.string()
            .max(255)
            .required(),
        lastName: Joi.string()
            .max(255)
            .required(),
        avatar: Joi.string(),
        gender: Joi.boolean().required(),
        birthday: Joi.date().required(),
        statusId: Joi.string().required(),
        phones: Joi.array()
            .items(Joi.string())
            .required(),
        addressIds: Joi.array()
            .items(Joi.string())
            .required(),
    }),
});
