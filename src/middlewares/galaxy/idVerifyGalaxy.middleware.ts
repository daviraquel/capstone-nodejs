import { NextFunction, Request, Response } from "express";
import { Galaxy } from "../../entities";
import { galaxyRepository } from "../../repositories";

export const IdVerifyGalaxy = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const galaxy = await galaxyRepository.retrieve({ id });

  if (!galaxy) {
    return res.status(404).json({ message: "Galaxy was't found" });
  }

  req.galaxy = galaxy;

  return next();
};
