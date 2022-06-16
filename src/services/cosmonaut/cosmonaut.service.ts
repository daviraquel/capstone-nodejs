import { Request } from "express";
import { hash } from "bcrypt";
import { AssertsShape } from "yup/lib/object";
import { AppDataSource } from "../../data-source";

import { Cosmonaut } from "../../entities/cosmonaut.entity";

import { ICosmonautCreate } from "../../interfaces/cosmonaut";
import { cosmonautRepository } from "../../repositories";
import { serializedCreateCosmonautSchema } from "../../schemas/cosmonaut/createCosmonaut.schema";

class CosmonautService {
  createCosmonaut = async ({
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    validData.password = await hash(validData.password, 10);
    const newCosmonaut: Cosmonaut = await cosmonautRepository.save(validData);

    return await serializedCreateCosmonautSchema.validate(newCosmonaut, {
      stripUnknown: true,
    });
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
