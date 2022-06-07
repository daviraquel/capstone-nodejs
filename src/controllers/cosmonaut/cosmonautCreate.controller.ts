import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import userCreateService from "../../services/cosmonaut/cosmonautCreate.service";

const cosmonautCreateController = async (req: Request, res: Response) => {
  try {
    const { user_name, email, password } = req.body;

    const { message, status } = await userCreateService({
      user_name,
      email,
      password,
    });

    return res.status(status).json(message);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default cosmonautCreateController;
