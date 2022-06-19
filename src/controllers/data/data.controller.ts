import { Request, Response } from "express";
import dataService from "../../services/data/data.service";

class dataController {
  createData = async (req: Request, res: Response) => {
    const data = await dataService.createData(req);
    return res.status(201).json(data);
  };
}

export default new dataController();
