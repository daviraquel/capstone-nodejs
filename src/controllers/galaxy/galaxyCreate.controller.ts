import { Response, Request } from "express";
import galaxyService from "../../services/galaxy/galaxy.service";

class GalaxyController {
  CreateGalaxy = async (req: Request, res: Response) => {
    const galaxy = await galaxyService.CreateService(req);
    return res.status(201).json(galaxy);
  };
  ListAllGalaxies = async (req: Request, res: Response) => {
    const galaxies = await galaxyService.ListAllGalaxies();
    return res.status(200).json(galaxies);
  };
  UpdateGalaxy = async (req: Request, res: Response) => {
    const galaxy = await galaxyService.UpdateGalaxy(req);
    return res.status(200).json(galaxy);
  };
  DeleteGalaxy = async (req: Request, res: Response) => {
    await galaxyService.DeleteGalaxy(req);
    return res.status(200).json("Galaxy was deleted");
  };
  GetAGalaxy = async (req: Request, res: Response) => {
    const galaxy = await galaxyService.GetAGalaxy(req);
    return res.status(200).json(galaxy);
  };
}

export default new GalaxyController();
