import { Request } from "express";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/appError";
import { ICategoryCreate } from "../../interfaces/category";
import categoryRepository from "../../repositories/category.repository";

class CategoryService {
  CategoryCreate = async (body: ICategoryCreate) => {
    // const categoryExists = await categoryRepository.retrieve({
    //   name: body.name,
    // });

    // if (categoryExists) {
    //   throw new AppError(409, "Category already exists");
    // }

    const category: Category = await categoryRepository.save({ ...body });
    return { status: 201, message: category };
  };

  ListAll = async (): Promise<Partial<Category>[] | void> => {
    const categories = await categoryRepository.getAll();

    return categories;
  };

  // ListById = async ({ category }: Request) => {};
}

export default new CategoryService();
