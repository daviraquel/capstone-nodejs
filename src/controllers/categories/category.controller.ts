import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import categoryService from "../../services/categories/category.service";

class CategoryController {
  CategoryCreate = async (req: Request, res: Response) => {
    // try {
    //   const { status, message } = await categoryService.CategoryCreate(
    //     req.body
    //   );

    //   return res.status(status).json(message);
    // } catch (err) {
    //   if (err instanceof AppError) {
    //     handleError(err, res);
    //   }
    // }

    const { status, message } = await categoryService.CategoryCreate(req.body);

    return res.status(status).json(message);
  };

  ListAllCategories = async (req: Request, res: Response) => {
    const categories = await categoryService.ListAll();
    return res.status(200).json(categories);
  };

  ListCategoryById = (req: Request, res: Response) => {
    const { category } = req;

    return res.status(200).json(category);
  };
}

export default new CategoryController();
