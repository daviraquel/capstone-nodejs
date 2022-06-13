import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { CelestialBody } from "../entities/celestialBody.entity";
import { Data } from "../entities/data.entity";
import { ICelestialBodyRepo } from "../interfaces/celestialBody";
import { IDataRepo } from "../interfaces/data";

class DataRepository implements IDataRepo {
  private repo: Repository<Data>;

  constructor() {
    this.repo = AppDataSource.getRepository(Data);
  }

  save = async (data: Data) => await this.repo.save(data);

  getAll = async () => await this.repo.find();

  retrieve = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Data>) => {
    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new DataRepository();
