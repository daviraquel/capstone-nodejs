import { NextFunction, Request, Response } from "express";
import categoryRepository from "../repositories/category.repository";

const CategoryExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryExists = await categoryRepository.retrieve({
    name: req.body.name,
  });

  if (categoryExists) {
    return res
      .status(409)
      .json({ status: "error", message: "Category already exists" });
  }

  return next();
};
export default CategoryExistsMiddleware;
