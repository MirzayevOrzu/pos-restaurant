import Joi from 'joi';

export const postUserSchema = {
  body: Joi.object({
    first_name: Joi.string().trim().min(1).required(),
    last_name: Joi.string().trim().min(1).required(),
    username: Joi.string().trim().min(3).required(),
    password: Joi.string().min(3).required(),
  }),
};

export const getUserSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

export const patchUserSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object({
    first_name: Joi.string().trim().min(1),
    last_name: Joi.string().trim().min(1),
    username: Joi.string().trim().min(3),
    password: Joi.string().min(3),
  }),
};

export const deleteUserSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};
