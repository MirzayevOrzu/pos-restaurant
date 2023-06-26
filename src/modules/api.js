import express from 'express';
import usersRoute from './users/_api.js';
import categoriesRoute from './categories/_api.js';
import measurementsRoute from './measurements/_api.js';

const rootRouter = express.Router();

rootRouter.use(usersRoute);
rootRouter.use(categoriesRoute);
rootRouter.use(measurementsRoute);

export default rootRouter;
