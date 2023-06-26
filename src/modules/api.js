import express from 'express';
import usersRoute from './users/api.js';

const rootRouter = express.Router();

rootRouter.use(usersRoute);

export default rootRouter;
