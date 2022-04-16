import { Request, Response, NextFunction } from 'express';

export = (err: any, req: Request, res: Response, next: NextFunction): object => {
  const httpStatus = err.status || 500;
  return res.status(httpStatus).send({
    status: httpStatus,
    code: err.code || 'INTERNAL_SERVER_ERROR',
    message: err.message,
  });
};
