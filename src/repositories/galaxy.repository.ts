import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Galaxy } from "../entities/galaxy.entity";
import { IGalaxyRepo } from "../interfaces/galaxy";

class GalaxyRepository implements IGalaxyRepo {
  private repo: Repository<Galaxy>;

  constructor() {
    this.repo = AppDataSource.getRepository(Galaxy);
  }

  save = async (galaxy: Galaxy) => await this.repo.save(galaxy);

  getAll = async () => await this.repo.find();

  retrieve = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Galaxy>) => {
    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new GalaxyRepository();
