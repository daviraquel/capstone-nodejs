import { NextFunction, Request, Response } from "express";
import { Category } from "../../entities/category.entity";
import categoryRepository from "../../repositories/category.repository";

const CheckCategoryExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categoryExists = await categoryRepository.retrieve({
    name: (req.validData as Category).name,
  });

  if (categoryExists) {
    return res
      .status(409)
      .json({ status: "error", message: "Category already exists" });
  }

  return next();
};
export default CheckCategoryExists;
