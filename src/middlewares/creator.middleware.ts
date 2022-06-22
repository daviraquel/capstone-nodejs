import { NextFunction, Request, Response } from "express";

export const CreatorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.body.creator = req.decoded.id;
  return next();
};
