import { Request, Response } from "express";
import celestialBodyService from "../../services/celestialBody/celestialBody.service";

class CelestialBodyController {
  CreateCelestialBody = async (req: Request, res: Response) => {
    const celestialBody = await celestialBodyService.CreateCelestialBody(req);
    return res.status(201).json(celestialBody);
  };
}

export default new CelestialBodyController();
