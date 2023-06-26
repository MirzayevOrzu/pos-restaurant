import express from 'express';
import { getUsers, getUser, patchUser, deleteUser, postUser } from './controllers.js';

const router = express.Router();

router.post('/users', postUser);
router.get('/users', getUsers);
router.get('/users/:id', getUser);
router.patch('/users/:id', patchUser);
router.delete('/users/:id', deleteUser);

export default router;
