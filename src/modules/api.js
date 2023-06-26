import express from 'express';
import usersRoute from './users/_api.js';

const rootRouter = express.Router();

rootRouter.use(usersRoute);

export default rootRouter;
