import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { CelestialBody } from "../entities/celestialBody.entity";
import { ICelestialBodyRepo } from "../interfaces/celestialBody";

class CelestialBodyRepository implements ICelestialBodyRepo {
  private repo: Repository<CelestialBody>;

  constructor() {
    this.repo = AppDataSource.getRepository(CelestialBody);
  }

  save = async (celestialBody: CelestialBody) =>
    await this.repo.save(celestialBody);

  getAll = async () => await this.repo.find();

  retrieve = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<CelestialBody>) => {
    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new CelestialBodyRepository();
