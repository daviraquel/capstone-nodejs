import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Cosmonaut } from "../entities";

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: string = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Missing authorization headers" });
  }

  return verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.decoded = decoded as Cosmonaut;
    return next();
  });
};
