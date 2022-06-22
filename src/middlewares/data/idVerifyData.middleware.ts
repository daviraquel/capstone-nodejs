import { NextFunction, Request, Response } from "express";
import { dataRepository } from "../../repositories";

export const IdVerifyData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const data = await dataRepository.retrieve({ id });

  if (!data) {
    return res.status(404).json({ message: "Data was't found" });
  }

  req.validData = data;

  return next();
};
