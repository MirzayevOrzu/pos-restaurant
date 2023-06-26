import Joi from 'joi';
import { BadRequestError } from '../errors/index.js';

/**
 * @param {{ body: any, params: any, query: any }} param0
 * @param {{ body: Joi.Schema, params: Joi.Schema, query: Joi.Schema }} schema
 * @returns
 */
const httpValidator = ({ body, params, query }, schema) => {
  return function validate() {
    if (body) {
      const { error } = schema.body.validate(body);

      if (error) throw new BadRequestError(error);
    }

    if (params) {
      const { error } = schema.params.validate(params);

      if (error) throw new BadRequestError(error);
    }

    if (query) {
      const { error } = schema.query.validate(query);

      if (error) throw new BadRequestError(error);
    }
  };
};

export default httpValidator;
