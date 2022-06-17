import { Request, Response } from "express";
import cosmonautService from "../../services/cosmonaut/cosmonaut.service";

class cosmonautController {
  createCosmonaut = async (req: Request, res: Response) => {
    const cosmonaut = await cosmonautService.createCosmonaut(req);
    return res.status(201).json(cosmonaut);
  };

  getAllCosmonauts = async (req: Request, res: Response) => {
    const { status, message } = await cosmonautService.getAll();

    return res.status(status).json(message);
  };
}

export default new cosmonautController();
