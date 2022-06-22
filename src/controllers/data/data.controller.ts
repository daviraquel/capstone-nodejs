import { Request, Response } from "express";
import dataService from "../../services/data/data.service";

class dataController {
  createData = async (req: Request, res: Response) => {
    const data = await dataService.createData(req);
    return res.status(201).json(data);
  };

  getData = async (req: Request, res: Response) => {
    const getData = await dataService.GetData();

    return res.status(200).json(getData);
  };
}

export default new dataController();
