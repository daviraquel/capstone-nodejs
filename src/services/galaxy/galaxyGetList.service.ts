import { AppDataSource } from "../../data-source";
import { Galaxy } from "../../entities/galaxy.entity";

const galaxyGetService = () => {
  const galaxiesRepository = AppDataSource.getRepository(Galaxy);
  const galaxies = galaxiesRepository.find();
  return { status: 200, list: galaxies };
};
export default galaxyGetService;
