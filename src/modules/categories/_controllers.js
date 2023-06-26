import express from 'express';
import httpValidator from '../../shared/http-validator/index.js';
import {
  deleteCategorySchema,
  getCategorySchema,
  patchCategorySchema,
  postCategorySchema,
} from './_schemas.js';
import { addCategory } from './add-category.js';
import { listCategories } from './list-categories.js';
import { showCategory } from './show-category.js';
import { editCategory } from './edit-category.js';
import { removeCategory } from './remove-category.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const postCategory = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postCategorySchema)();

    const result = await addCategory(req.body);

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
export const getCategories = async (req, res, next) => {
  try {
    const result = await listCategories();

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
export const getCategory = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, getCategorySchema)();

    const result = await showCategory({ id: req.params.id });

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
export const patchCategory = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchCategorySchema)();

    const result = await editCategory({ id: req.params.id, ...req.body });

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
export const deleteCategory = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteCategorySchema)();

    const result = await removeCategory({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
