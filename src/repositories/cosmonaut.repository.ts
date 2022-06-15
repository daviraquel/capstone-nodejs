import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";
import { hashSync } from "bcrypt";
import { Cosmonaut } from "../entities/cosmonaut.entity";
import { ICosmonautRepo } from "../interfaces/cosmonaut";

class CosmonautRepository implements ICosmonautRepo {
  private repo: Repository<Cosmonaut>;
  constructor() {
    this.repo = AppDataSource.getRepository(Cosmonaut);
  }

  save = async (cosmonaut: Cosmonaut) => await this.repo.save(cosmonaut);

  getAll = async () => await this.repo.find();

  retrieve = async (payload: object) => {
    return await this.repo.findOneBy({ ...payload });
  };

  update = async (id: string, payload: Partial<Cosmonaut>) => {
    if (payload.password) {
      payload.password = hashSync(payload.password, 10);
    }

    return await this.repo.update(id, { ...payload });
  };

  delete = async (id: string) => await this.repo.delete(id);
}

export default new CosmonautRepository();
