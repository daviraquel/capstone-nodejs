import { NextFunction, Request, Response } from "express";
import { Cosmonaut } from "../../entities";
import { cosmonautRepository } from "../../repositories";

export const IdVerifyCosmonaut = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.decoded;
  const cosmonaut = await cosmonautRepository.retrieve({ id });

  if (!cosmonaut) {
    return res.status(404).json({ message: "Cosmonaut not found" });
  }

  req.cosmonaut = cosmonaut as Cosmonaut;

  return next();
};
