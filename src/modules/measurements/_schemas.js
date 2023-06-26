import Joi from 'joi';

export const postMeasurementSchema = {
  body: Joi.object({
    name: Joi.string().min(1).required(),
    inc_by: Joi.number().positive().required(),
  }),
};

export const getMeasurementSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};

export const patchMeasurementSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
  body: Joi.object({
    name: Joi.string().min(1),
    inc_by: Joi.number().positive(),
  }),
};

export const deleteMeasurementSchema = {
  params: Joi.object({
    id: Joi.number().integer().required(),
  }),
};
