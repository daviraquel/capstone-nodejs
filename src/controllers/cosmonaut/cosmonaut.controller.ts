import { Request, Response } from "express";
import cosmonautService from "../../services/cosmonaut/cosmonaut.service";

class cosmonautController {
  createCosmonaut = async (req: Request, res: Response) => {
    const { user_name, email, password } = req.body;
    const { status, message } = await cosmonautService.createCosmonaut({
      user_name,
      email,
      password,
    });

    return res.status(status).json(message);
  };

  getAllCosmonauts = async (req: Request, res: Response) => {
    const { status, message } = await cosmonautService.getAll();

    return res.status(status).json(message);
  };
}

export default new cosmonautController();
