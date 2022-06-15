import bcrypt, { hash } from "bcrypt";
import { AppDataSource } from "../../data-source";

import { Cosmonaut } from "../../entities/cosmonaut.entity";

import { ICosmonautCreate } from "../../interfaces/cosmonaut";
import { cosmonautRepository } from "../../repositories";

class CosmonautService {
  createCosmonaut = async (data: ICosmonautCreate) => {
    (data as Cosmonaut).password = await hash((data as Cosmonaut).password, 10);
    const newCosmonaut: Cosmonaut = await cosmonautRepository.save(
      data as Cosmonaut
    );

    return {
      status: 201,
      message: newCosmonaut,
    };
  };

  getAll = async () => {
    const repo = AppDataSource.getRepository(Cosmonaut);
    const cosmonautsList = await repo.find();

    return {
      status: 200,
      message: cosmonautsList,
    };
  };
}

export default new CosmonautService();
