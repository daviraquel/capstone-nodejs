import { Request } from "express";
import { hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AssertsShape } from "yup/lib/object";
import { Cosmonaut } from "../../entities/cosmonaut.entity";
import { cosmonautRepository } from "../../repositories";
import { serializedCosmonautSchema } from "../../schemas/cosmonaut";
import * as dotenv from "dotenv";
import { IReturnCosmonaut } from "../../interfaces/cosmonaut";

dotenv.config();

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

    return await serializedCosmonautSchema.validate(newCosmonaut, {
      stripUnknown: true,
    });
  };

  loginCosmonaut = async ({
    validData,
  }: Request): Promise<IReturnCosmonaut> => {
    const cosmonaut: Cosmonaut = await cosmonautRepository.retrieve({
      email: (validData as Cosmonaut).email,
    });

    if (!cosmonaut) {
      return { status: 401, message: { message: "Invalid credentials" } };
    }

    if (!(await cosmonaut.comparePassword((validData as Cosmonaut).password))) {
      return { status: 401, message: { message: "Invalid credentials" } };
    }

    const serializedCosmonaut = await serializedCosmonautSchema.validate(
      cosmonaut,
      {
        stripUnknown: true,
      }
    );

    const token: string = sign(
      { ...serializedCosmonaut },
      process.env.SECRET_KEY,
      {
        expiresIn: process.env.EXPIRES_IN,
      }
    );

    return { status: 200, message: { token } };
  };

  getAll = async (): Promise<IReturnCosmonaut> => {
    const cosmonautsList = await cosmonautRepository.getAll();

    const serializedCosmonautList = [];

    for (let i = 0; i < cosmonautsList.length; i++) {
      serializedCosmonautList.push(
        await serializedCosmonautSchema.validate(cosmonautsList[i], {
          stripUnknown: true,
        })
      );
    }

    return {
      status: 200,
      message: serializedCosmonautList,
    };
  };

  getById = async ({ cosmonaut }: Request): Promise<IReturnCosmonaut> => {
    return {
      status: 200,
      message: await serializedCosmonautSchema.validate(cosmonaut, {
        stripUnknown: true,
      }),
    };
  };

  updateCosmonaut = async ({
    validData,
    cosmonaut,
  }: Request): Promise<AssertsShape<any>> => {
    if ((validData as Cosmonaut).password) {
      (validData as Cosmonaut).password = await hash(
        (validData as Cosmonaut).password,
        10
      );
    }

    await cosmonautRepository.update(cosmonaut.id, {
      ...(validData as Cosmonaut),
    });

    const { id } = cosmonaut;
    const cosmonautUpdate = await cosmonautRepository.retrieve({ id });

    return await serializedCosmonautSchema.validate(cosmonautUpdate, {
      stripUnknown: true,
    });
  };

  deleteCosmonaut = async ({ cosmonaut }: Request) => {
    await cosmonautRepository.delete(cosmonaut.id);
  };
}

export default new CosmonautService();
