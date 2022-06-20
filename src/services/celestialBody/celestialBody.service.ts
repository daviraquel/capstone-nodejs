import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { CelestialBody } from "../../entities";
import { celestialBodyRepository } from "../../repositories";
import { serializedCelestialBodyChema } from "../../schemas/celestialBody";

class CelestialBodyService {
  CreateCelestialBody = async ({
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    const celestialBody = await celestialBodyRepository.save({
      ...(validData as CelestialBody),
    });

    return await serializedCelestialBodyChema.validate(celestialBody, {
      stripUnknown: true,
    });
  };
}

export default new CelestialBodyService();
