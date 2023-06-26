import express from 'express';
import {
  postMeasurement,
  getMeasurements,
  getMeasurement,
  patchMeasurement,
  deleteMeasurement,
} from './_controllers.js';

const router = express.Router();

router.post('/measurements', postMeasurement);
router.get('/measurements', getMeasurements);
router.get('/measurements/:id', getMeasurement);
router.patch('/measurements/:id', patchMeasurement);
router.delete('/measurements/:id', deleteMeasurement);

export default router;
