import { Response, Request } from "express";
import galaxyCreateService from "../../services/galaxy/galaxyCreate.service";

class GalaxyController {
  CreateGalaxy = async (req: Request, res: Response) => {
    const { name, description, creator } = req.body;
    const galaxy = await galaxyCreateService({ name, description, creator });
    return res.status(201).json(galaxy);
  };
}

export default new GalaxyController();
