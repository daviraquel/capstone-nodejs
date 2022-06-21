import { Request } from "express";
import { hash } from "bcrypt";
import bcrypt from "bcrypt";
import { AssertsShape } from "yup/lib/object";
import { AppDataSource } from "../../data-source";

import { Cosmonaut } from "../../entities/cosmonaut.entity";

import { cosmonautRepository } from "../../repositories";
import { serializedCreateCosmonautSchema } from "../../schemas/cosmonaut/createCosmonaut.schema";
import { AppError } from "../../errors/appError";

class CosmonautService {
  createCosmonaut = async ({
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    (validData as Cosmonaut).password = await hash(
      (validData as Cosmonaut).password,
      10
    );
    const newCosmonaut: Cosmonaut = await cosmonautRepository.save(
      validData as Cosmonaut
    );

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

  updateCosmonaut = async (email: string, password: string) => {
    const cosmonautRepo = AppDataSource.getRepository(Cosmonaut);
    const cosmonaut = await cosmonautRepo.find();

    const account = cosmonaut.find((user) => user.email === email);

    if (bcrypt.compareSync(password, account!.password)) {
      throw new AppError(409, "Security mismatch");
    }

    const newPassword = hash(password, 10);

    await cosmonautRepository.update(account!.id, { password: newPassword });

    return { status: 201, message: account };
  };

  deleteCosmonaut = async (email: string) => {
    const cosmonautRepo = AppDataSource.getRepository(Cosmonaut);
    const cosmonaut = await cosmonautRepo.find();

    const account = cosmonaut.find((user) => user.email === email);

    await cosmonautRepo.delete(account!.id);

    return { status: 202, message: "Deleted cosmonaut" };
  };
}

export default new CosmonautService();
