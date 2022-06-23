import { NextFunction, Request, Response } from "express";
import { CelestialBody } from "../../entities";
import { celestialBodyRepository } from "../../repositories";

export const checkCelestialBodyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const celestialBodyExists = await celestialBodyRepository.retrieve({
      name: (req.validData as CelestialBody).name,
    });

    if (celestialBodyExists) {
      return res
        .status(409)
        .json({ status: "error", message: "Celestial body already exists" });
    }

    return next();
  } catch (err) {
    console.log(err);
  }
};
