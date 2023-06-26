import express from 'express';
import { listUsers } from './list-users.js';
import { showUser } from './show-user.js';
import { editUser } from './edit-user.js';
import { removeUser } from './remove-user.js';
import httpValidator from '../../shared/http-validator/index.js';
import { deleteUserSchema, getUserSchema, patchUserSchema, postUserSchema } from './schemas.js';
import { addUser } from './add-user.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserSchema);

    const result = await addUser(req.body);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const getUsers = async (req, res, next) => {
  try {
    const result = await listUsers();

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const getUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, getUserSchema)();

    const result = await showUser({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const patchUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchUserSchema)();

    const result = await editUser({ id: req.params.id, ...req.body });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const deleteUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUserSchema)();

    const result = await removeUser({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
