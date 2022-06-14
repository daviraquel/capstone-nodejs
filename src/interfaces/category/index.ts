import { DeleteResult, UpdateResult } from "typeorm";
import { Category } from "../../entities/category.entity";

export interface ICategoryRepo {
  save: (category: Category) => Promise<Category>;
  getAll: () => Promise<Category[]>;
  retrieve: (payload: object) => Promise<Category | null>;
  update: (id: string, payload: Partial<Category>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}
