import express from 'express';
import { getUsers, getUser } from './controllers.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);

export default router;
