import express from 'express';
import httpValidator from '../../shared/http-validator/index.js';
import {
  deleteItemSchema,
  getItemSchema,
  patchItemSchema,
  postOptionSchema,
  postItemSchema,
  deleteOptionSchema,
} from './_schemas.js';
import { addItem } from './add-item.js';
import { listItems } from './list-items.js';
import { showItem } from './show-item.js';
import { editItem } from './edit-item.js';
import { removeItem } from './remove-item.js';
import { addOption } from './add-option.js';
import { removeOption } from './remove-option.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const postItem = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postItemSchema)();

    const result = await addItem(req.body);

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
export const getItems = async (req, res, next) => {
  try {
    const result = await listItems();

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
export const getItem = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, getItemSchema)();

    const result = await showItem({ id: req.params.id });

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
export const patchItem = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchItemSchema)();

    const result = await editItem({ id: req.params.id, ...req.body });

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
export const deleteItem = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteItemSchema)();

    const result = await removeItem({ id: req.params.id });

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
export const postOption = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postOptionSchema)();

    const result = await addOption(req.body);

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
export const deleteOption = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteOptionSchema)();

    const result = await removeOption(req.params);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
