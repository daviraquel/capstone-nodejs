import { NextFunction, Request, Response } from "express";
import { Data } from "../../entities";
import { dataRepository } from "../../repositories";

export const checkDataExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dataIdExist = await dataRepository.retrieve({
    name: (req.validData as Data).id,
  });
  if (dataIdExist) {
    return res.status(400).json({ message: "Data already in use" });
  }
  return next();
};
