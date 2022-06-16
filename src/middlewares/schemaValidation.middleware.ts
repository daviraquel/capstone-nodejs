import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const schemaValidation =
  (shape: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validUser = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.validData = validUser;

      return next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
  };

export default schemaValidation;
