import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { Galaxy } from "../../entities";
import galaxyRepository from "../../repositories/galaxy.repository";
import { createSerelizedGalaxySchema } from "../../schemas/galaxy";

class GalaxyService {
  CreateService = async ({ galaxy }: Request): Promise<AssertsShape<any>> => {
    const newGalaxy: Galaxy = await galaxyRepository.save({ ...galaxy });
    return await createSerelizedGalaxySchema.validate(newGalaxy, {
      stripUnknown: true,
    });
  };
  GetAGalaxy = async ({ galaxy }: Request) => {};
  ListAllGalaxies = async ({ galaxy }: Request) => {
    return "";
  };
  UpdateGalaxy = async ({ galaxy }: Request) => {
    return "";
  };
  DeleteGalaxy = async ({ galaxy }: Request) => {};
}

export default new GalaxyService();
