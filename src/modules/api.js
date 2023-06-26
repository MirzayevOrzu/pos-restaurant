import express from 'express';
import usersRoute from './users/_api.js';
import categoriesRoute from './categories/_api.js';

const rootRouter = express.Router();

rootRouter.use(usersRoute);
rootRouter.use(categoriesRoute);

export default rootRouter;
