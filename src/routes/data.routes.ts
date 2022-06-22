import { Router } from "express";
import dataController from "../controllers/data/data.controller";
import { schemaValidation } from "../middlewares";
import { createDataSchema } from "../schemas/data/createData.schema";

const routes = Router();

export const dataRoutes = () => {
  routes.post(
    "/",
    schemaValidation(createDataSchema),
    dataController.createData
  );

  routes.get("/", schemaValidation(createDataSchema), dataController.getData);

  return routes;
};
