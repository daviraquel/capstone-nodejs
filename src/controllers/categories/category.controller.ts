import { Request, Response } from "express";
import categoryService from "../../services/category/category.service";

class CategoryController {
  CategoryCreate = async (req: Request, res: Response) => {
    const category = await categoryService.CategoryCreate(req);
    return res.status(201).json(category);
  };

  ListAllCategories = async (_: Request, res: Response) => {
    const categories = await categoryService.ListAll();
    return res.status(200).json(categories);
  };

  ListCategoryById = (req: Request, res: Response) => {
    const { category } = req;
    return res.status(200).json(category);
  };

  UpdateCategory = async (req: Request, res: Response) => {
    const categoryUpdate = await categoryService.UpdateCategory(req);
    return res.status(200).json(categoryUpdate);
  };

  DeleteCategory = async (req: Request, res: Response) => {
    await categoryService.DeleteCategory(req);
    return res.status(202).json({ message: "Deleted category" });
  };
}

export default new CategoryController();
