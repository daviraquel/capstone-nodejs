import { Response, Request } from "express";
import galaxyCreateService from "../../services/galaxy/galaxyCreate.service";

const galaxyCreateController = async (req: Request, res: Response) => {
  const { name, description } = req.params;
  const newGalaxy = await galaxyCreateService({ name, description });

  return res.status(newGalaxy.status).send(newGalaxy.create);
};
