import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { Category } from "../../entities/category.entity";
import { categoryRepository } from "../../repositories";
import { serializedCategorySchema } from "../../schemas/category";

class CategoryService {
  CategoryCreate = async ({
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    const category: Category = await categoryRepository.save({
      ...(validData as Category),
    });

    return await serializedCategorySchema.validate(category, {
      stripUnknown: true,
    });
  };

  ListAll = async (): Promise<Partial<Category>[] | void> => {
    const categories = await categoryRepository.getAll();

    return categories;
  };

  UpdateCategory = async ({ category, validData }: Request) => {
    await categoryRepository.update(category.id, {
      ...(validData as Category),
    });

    const { id } = category;
    const categoryUpdate = await categoryRepository.retrieve({ id });

    return await serializedCategorySchema.validate(categoryUpdate, {
      stripUnknown: true,
    });
  };

  DeleteCategory = async ({ category }: Request) => {
    await categoryRepository.delete(category.id);
  };
}

export default new CategoryService();
