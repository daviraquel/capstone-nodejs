import { Request } from "express";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";
import { ICategoryCreate } from "../../interfaces/category";
import categoryRepository from "../../repositories/category.repository";

class CategoryService {
  CategoryCreate = async (body: ICategoryCreate) => {
    const category: Category = await categoryRepository.save({ ...body });
    return { status: 201, message: category };
  };

  ListAll = async (): Promise<Partial<Category>[] | void> => {
    const categories = await categoryRepository.getAll();

    return categories;
  };

  UpdateCategory = async ({ category, body }: Request) => {
    await categoryRepository.update(category.id, { ...body });

    const { id } = category;
    const categoryUpdate = await categoryRepository.retrieve({ id });

    return categoryUpdate;
  };

  DeleteCategory = async ({ category }: Request) => {
    await categoryRepository.delete(category.id);
    return { status: 202, message: "Deleted category" };
  };
}

export default new CategoryService();
