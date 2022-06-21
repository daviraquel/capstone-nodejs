import { NextFunction, Request, Response } from "express";
import { Cosmonaut } from "../../entities";
import { cosmonautRepository } from "../../repositories";

export const checkCosmonautExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const foundEmail: Cosmonaut = await cosmonautRepository.retrieve({
    email: (req.validData as Cosmonaut).email,
  });
  if (foundEmail) {
    return res.status(409).json({ message: "Email already registered." });
  }

  const foundUsername: Cosmonaut = await cosmonautRepository.retrieve({
    email: (req.validData as Cosmonaut).user_name,
  });
  if (foundUsername) {
    return res.status(409).json({ message: "User_name already registered." });
  }

  return next();
};
