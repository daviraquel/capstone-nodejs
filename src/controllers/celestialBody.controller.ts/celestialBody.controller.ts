import { Request, Response } from "express";
import celestialBodyService from "../../services/celestialBody/celestialBody.service";

class CelestialBodyController {
  CreateCelestialBody = async (req: Request, res: Response) => {
    const celestialBody = await celestialBodyService.CreateCelestialBody(req);
    return res.status(201).json(celestialBody);
  };

  GetCelestialBody = async (req: Request, res: Response) => {
    const getCelestialBody = await celestialBodyService.GetCelestialBody();

    return res.status(200).json(getCelestialBody);
  };

  GetCelestialBodyById = async (req: Request, res: Response) => {
    const { celestialBody } = req;
    return res.status(200).json(celestialBody);
  };

  UpdateCelestialBody = async (req: Request, res: Response) => {
    const updateCelestialBody = await celestialBodyService.UpdateCelestialBody(
      req
    );
    return res.status(200).json(updateCelestialBody);
  };

  DeleteCelestialBody = async (req: Request, res: Response) => {
    await celestialBodyService.DeleteCelestialBody(req);
    return res.status(200).json({ message: "Deleted celestial body" });
  };
}

export default new CelestialBodyController();
