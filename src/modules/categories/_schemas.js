import Joi from 'joi';

export const postCategorySchema = {
  body: Joi.object({
    name: Joi.string().min(1).required(),
  }),
};

export const getCategorySchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

export const patchCategorySchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object({
    name: Joi.string().min(1).required(),
  }),
};

export const deleteCategorySchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};
