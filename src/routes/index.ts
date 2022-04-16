import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import 'express-async-error';
import { ErrorMiddleware, NotFoundMiddleware } from '../middlewares';

export = function ({ ClientRoutes }: any) {
  const router = express.Router();
  const apiRoutes = express.Router();

  //middleware default
  apiRoutes
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(morgan('dev'));

  //prefix route
  router.use('/by/JYBGR', apiRoutes);

  //middleware setting
  router.use(ErrorMiddleware);
  router.use(NotFoundMiddleware);

  //endpoints
  apiRoutes.use('/client', ClientRoutes);

  return router;
};
