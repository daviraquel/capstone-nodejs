import { Request, Response } from "express";
import dataService from "../../services/data/data.service";

class dataController {
  createData = async (req: Request, res: Response) => {
    const data = await dataService.createData(req);
    return res.status(201).json(data);
  };

  getData = async (req: Request, res: Response) => {
    const getData = await dataService.getData();

    return res.status(200).json(getData);
  };

  updateData = async (req: Request, res: Response) => {
    const galaxy = await dataService.updateData(req);
    return res.status(200).json(galaxy);
  };

  deleteData = async (req: Request, res: Response) => {
    await dataService.deleteData(req);
    return res.status(200).json({ message: "Deleted Data" });
  };
}

export default new dataController();
