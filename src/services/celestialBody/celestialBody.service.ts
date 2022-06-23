import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { CelestialBody } from "../../entities";
import { celestialBodyRepository } from "../../repositories";
import { serializedCelestialBodySchema } from "../../schemas/celestialBody";

class CelestialBodyService {
  CreateCelestialBody = async ({
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    const celestialBody = await celestialBodyRepository.save({
      ...(validData as CelestialBody),
    });

    const { id } = celestialBody;
    const getCelestialBody = await celestialBodyRepository.retrieve({ id });

    return await serializedCelestialBodySchema.validate(getCelestialBody, {
      stripUnknown: true,
    });
  };

  GetCelestialBody = async () => {
    const listCelestialBodies = await celestialBodyRepository.getAll();

    return {
      status: 200,
      message: listCelestialBodies,
    };
  };

  GetACelestialBody = async ({ celestialBody }: Request) => {
    const { id } = celestialBody;
    const galaxyUpdate = await celestialBodyRepository.retrieve({ id });

    return await serializedCelestialBodySchema.validate(galaxyUpdate, {
      stripUnknown: true,
    });
  };

  UpdateCelestialBody = async ({
    celestialBody,
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    await celestialBodyRepository.update(celestialBody.id, {
      ...(validData as CelestialBody),
    });

    const { id } = celestialBody;
    const celestialBodyUpdate = await celestialBodyRepository.retrieve({ id });

    return await serializedCelestialBodySchema.validate(celestialBodyUpdate, {
      stripUnknown: true,
    });
  };

  DeleteCelestialBody = async ({ celestialBody }: Request) => {
    await celestialBodyRepository.delete(celestialBody.id);
  };
}

export default new CelestialBodyService();
