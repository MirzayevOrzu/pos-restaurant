import express from 'express';
import httpValidator from '../../shared/http-validator/index.js';
import {
  deleteMeasurementSchema,
  getMeasurementSchema,
  patchMeasurementSchema,
  postMeasurementSchema,
} from './_schemas.js';
import { addMeasurement } from './add-measurement.js';
import { listMeasurements } from './list-measurements.js';
import { showMeasurement } from './show-measurement.js';
import { editMeasurement } from './edit-measurement.js';
import { removeMeasurement } from './remove-measurement.js';

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
export const postMeasurement = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postMeasurementSchema)();

    const result = await addMeasurement(req.body);

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
export const getMeasurements = async (req, res, next) => {
  try {
    const result = await listMeasurements();

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
export const getMeasurement = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, getMeasurementSchema)();

    const result = await showMeasurement({ id: req.params.id });

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
export const patchMeasurement = async (req, res, next) => {
  try {
    httpValidator({ params: req.params, body: req.body }, patchMeasurementSchema)();

    const result = await editMeasurement({ id: req.params.id, ...req.body });

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
export const deleteMeasurement = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteMeasurementSchema)();

    const result = await removeMeasurement({ id: req.params.id });

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
