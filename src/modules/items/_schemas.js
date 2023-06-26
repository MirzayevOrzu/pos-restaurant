import Joi from 'joi';

export const postItemSchema = {
  body: Joi.object({
    name: Joi.string().min(1).required(),
    description: Joi.string().required(),
    category_id: Joi.number().integer().required(),
    type: Joi.string().valid('food', 'good').required(),
    in_menu: Joi.bool(),
  }),
};

export const getItemSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

export const patchItemSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object({
    name: Joi.string().min(1),
    description: Joi.string(),
    category_id: Joi.number().integer(),
    type: Joi.string().valid('food', 'good'),
    in_menu: Joi.bool(),
  }),
};

export const deleteItemSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};
