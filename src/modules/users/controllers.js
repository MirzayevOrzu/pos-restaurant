import express from 'express';
import { listUsers } from './list-users.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
export const getUsers = async (req, res, next) => {
  try {
    const result = await listUsers();

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
