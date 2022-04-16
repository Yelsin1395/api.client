import { Request, Response, NextFunction } from 'express';

export = (req: Request, res: Response, next: NextFunction) =>
  res.status(404).send({ status: 404, message: 'Resource not found' });
