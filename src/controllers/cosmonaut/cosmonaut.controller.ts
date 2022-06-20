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

  updateCosmonaut = async (req: Request, res: Response) => {
    const { status, message } = await cosmonautService.updateCosmonaut(
      req.body.email,
      req.body.password
    );

    return res.status(status).json(message);
  };

  deleteCosmonaut = async (req: Request, res: Response) => {
    const { status, message } = await cosmonautService.deleteCosmonaut(
      req.body.email
    );

    return res.status(status).json(message);
  };
}

export default new cosmonautController();
