import express from 'express';
import {
  postItem,
  getItems,
  getItem,
  patchItem,
  deleteItem,
  postAddOption,
} from './_controllers.js';

const router = express.Router();

router.post('/items', postItem);
router.get('/items', getItems);
router.get('/items/:id', getItem);
router.patch('/items/:id', patchItem);
router.delete('/items/:id', deleteItem);
router.post('/items/add-option', postAddOption);

export default router;
