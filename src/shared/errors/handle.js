import express from 'express';
import { NotFoundError, BadRequestError, UnauthorizedError, ForbiddedError } from './index.js';

/**
 * @param {Error} err
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const handleErrors = (err, req, res, next) => {
  let status = 500;

  if (err instanceof BadRequestError) status = 400;
  else if (err instanceof UnauthorizedError) status = 401;
  else if (err instanceof ForbiddedError) status = 403;
  else if (err instanceof NotFoundError) status = 404;

  res.status(status).json({
    error: err.message,
  });
};

export default handleErrors;
