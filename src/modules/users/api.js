import express from 'express';
import { getUsers, getUser, patchUser } from './controllers.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.patch('/users/:id', patchUser);

export default router;
