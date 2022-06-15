import { Response, Request } from "express";
import galaxyCreateService from "../../services/galaxy/galaxyCreate.service";

const galaxyCreateController = async (req: Request, res: Response) => {
  const { name, description, creator } = req.body;
  const newGalaxy = await galaxyCreateService({ name, description, creator });

  return res.status(newGalaxy.status).send(newGalaxy.create);
};
export default galaxyCreateController;
