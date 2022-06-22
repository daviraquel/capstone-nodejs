import { Request, Response } from "express";
import cosmonautService from "../../services/cosmonaut/cosmonaut.service";

class cosmonautController {
  createCosmonaut = async (req: Request, res: Response) => {
    const cosmonaut = await cosmonautService.createCosmonaut(req);
    return res.status(201).json(cosmonaut);
  };

  loginCosmonaut = async (req: Request, res: Response) => {
    const { status, message } = await cosmonautService.loginCosmonaut(req);
    return res.status(status).json(message);
  };

  getAllCosmonauts = async (req: Request, res: Response) => {
    const { status, message } = await cosmonautService.getAll();

    return res.status(status).json(message);
  };

  getByIdCosmonaut = async (req: Request, res: Response) => {
    const { status, message } = await cosmonautService.getById(req);
    return res.status(status).json(message);
  };

  updateCosmonaut = async (req: Request, res: Response) => {
    const cosmonaut = await cosmonautService.updateCosmonaut(req);
    return res.status(200).json(cosmonaut);
  };

  deleteCosmonaut = async (req: Request, res: Response) => {
    await cosmonautService.deleteCosmonaut(req);
    return res.status(200).json({ message: "Deleted cosmonaut" });
  };
}

export default new cosmonautController();
