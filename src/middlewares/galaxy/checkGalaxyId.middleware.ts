import { NextFunction, Request, Response } from "express";
import { Galaxy } from "../../entities";
import { galaxyRepository } from "../../repositories";

export const checkGalaxyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const galaxyNameExist = await galaxyRepository.retrieve({
    name: (req.validData as Galaxy).name,
  });
  if (galaxyNameExist) {
    return res.status(400).json({ message: "Name already in use" });
  }
  return next();
};
