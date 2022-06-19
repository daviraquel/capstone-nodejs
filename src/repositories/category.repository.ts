import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category } from "../entities/category.entity";
import { ICategoryCreate, ICategoryRepo } from "../interfaces/category";

class CategoryRepository implements ICategoryRepo {
  private repo: Repository<Category>;

  constructor() {
    this.repo = AppDataSource.getRepository(Category);
  }

  save = async (category: ICategoryCreate) => await this.repo.save(category);

  getAll = async () => await this.repo.find();
  retrieve = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Category>) => {
    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new CategoryRepository();
