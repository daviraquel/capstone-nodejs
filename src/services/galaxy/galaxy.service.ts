import { Request } from "express";
import { AssertsShape } from "yup/lib/object";
import { Galaxy } from "../../entities";
import galaxyRepository from "../../repositories/galaxy.repository";
import { createSerelizedGalaxySchema } from "../../schemas/galaxy";

class GalaxyService {
  CreateService = async ({
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    const newGalaxy: Galaxy = await galaxyRepository.save({
      ...(validData as Galaxy),
    });
    return await createSerelizedGalaxySchema.validate(newGalaxy, {
      stripUnknown: true,
    });
  };
  GetAGalaxy = async ({ galaxy }: Request) => {
    const { id } = galaxy;
    const galaxyUpdate = await galaxyRepository.retrieve({ id });

    return await createSerelizedGalaxySchema.validate(galaxyUpdate, {
      stripUnknown: true,
    });
  };
  ListAllGalaxies = async (): Promise<Partial<Galaxy>[] | void> => {
    const galaxies = await galaxyRepository.getAll();
    return galaxies;
  };
  UpdateGalaxy = async ({
    galaxy,
    validData,
  }: Request): Promise<AssertsShape<any>> => {
    await galaxyRepository.update(galaxy.id, { ...(validData as Galaxy) });
    const { id } = galaxy;
    const galaxyUpdate = await galaxyRepository.retrieve({ id });

    return await createSerelizedGalaxySchema.validate(galaxyUpdate, {
      stripUnknown: true,
    });
  };
  DeleteGalaxy = async ({ galaxy }: Request) => {
    await galaxyRepository.delete(galaxy.id);
  };
}

export default new GalaxyService();
