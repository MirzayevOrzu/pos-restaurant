import express from 'express';
import {
  postCategory,
  getCategories,
  getCategory,
  patchCategory,
  deleteCategory,
} from './_controllers.js';

const router = express.Router();

router.post('/categories', postCategory);
router.get('/categories', getCategories);
router.get('/categories/:id', getCategory);
router.patch('/categories/:id', patchCategory);
router.delete('/categories/:id', deleteCategory);

export default router;
