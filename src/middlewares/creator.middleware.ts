import { NextFunction, Request, Response } from "express";
import { cosmonautRepository } from "../repositories";

export const CreatorMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.decoded;
  const cosmonaut = await cosmonautRepository.retrieve({ id });

  if (!cosmonaut) {
    return res.status(404).json({ message: "Token invalid" });
  }

  req.body.creator = id;
  return next();
};
