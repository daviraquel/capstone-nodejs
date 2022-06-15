import { AppDataSource } from "../../data-source";
import { Galaxy } from "../../entities/galaxy.entity";

const galaxyUpdate = async ({ name, description }) => {
  const galaxyRepository = AppDataSource.getRepository(Galaxy);
  const galaxyList = await galaxyRepository.find();
  const galaxyFind = galaxyList.find((galaxy) => galaxy.name === name);

  return { status: 200, update: "" };
};
export default galaxyUpdate;
