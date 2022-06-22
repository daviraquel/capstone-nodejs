import { Request, Response, NextFunction } from "express";
import { categoryRepository } from "../../repositories";

const IdVerify = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;
  const category = await categoryRepository.retrieve({ id });

  if (!category) {
    return response.status(404).json({ message: "Category not found" });
  }

  request.category = category;

  next();
};

export default IdVerify;
