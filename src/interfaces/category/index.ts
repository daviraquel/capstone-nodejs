import { DeleteResult, UpdateResult } from "typeorm";
import { Category } from "../../entities/category.entity";

export interface ICategoryRepo {
  save: (category: ICategoryCreate) => Promise<Category>;
  getAll: () => Promise<Category[] | void>;
  retrieve: (payload: object) => Promise<Category>;
  update: (id: string, payload: Partial<Category>) => Promise<UpdateResult>;
  delete: (id: string) => Promise<DeleteResult>;
}

export interface ICategoryCreate {
  name: string;
  description: string;
}
