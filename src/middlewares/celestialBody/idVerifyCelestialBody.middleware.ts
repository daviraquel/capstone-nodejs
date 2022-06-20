import { NextFunction, Request, Response } from "express";
import { resolve } from "path";
import { celestialBodyRepository } from "../../repositories";

export const IdVerifyCelestialBody = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const celestialBody = await celestialBodyRepository.retrieve({ id });

  if (!celestialBody) {
    return res.status(404).json({ message: "Celestial body not found" });
  }

  req.celestialBody = celestialBody;

  return next();
};
