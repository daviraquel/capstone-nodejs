import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/appError";

import { Galaxy } from "../../entities/galaxy.entity";
import { IGalaxyCreate } from "../../interfaces/galaxy";

const galaxyCreateService = async ({ name, description }: IGalaxyCreate) => {
  const galaxyRepository = AppDataSource.getRepository(Galaxy);
  const galaxies = await galaxyRepository.find();
  const galaxyNotUnique = galaxies.find(
    (galaxy) => galaxy.name.toLowerCase() === name.toLowerCase()
  );
  if (galaxyNotUnique) {
    throw new AppError(400, "Galaxy name in use");
  }
  const newGalaxy = new Galaxy();
  newGalaxy.name = name;
  newGalaxy.description = description;
  galaxyRepository.create(newGalaxy);
  await galaxyRepository.save(newGalaxy);
  return { status: 201, create: newGalaxy };
};
export default galaxyCreateService;
