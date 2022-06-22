import { Router } from "express";
import dataController from "../controllers/data/data.controller";
import { schemaValidation } from "../middlewares";
import { createDataSchema } from "../schemas/data/createData.schema";
import { checkDataExists } from "../middlewares/data";
import { validateToken } from "../middlewares/validateToken.middleware";
import { IdVerifyData } from "../middlewares/data/idVerifyData.middleware";
import { UpdateDataSchema } from "../schemas/data/createData.schema";

const routes = Router();

export const dataRoutes = () => {
  routes.post(
    "/",
    schemaValidation(createDataSchema),
    validateToken,
    checkDataExists,
    dataController.createData
  );

  routes.get("/", validateToken, dataController.getData);

  routes.delete("/:id", IdVerifyData, validateToken, dataController.deleteData);

  routes.patch(
    "/:id",
    IdVerifyData,
    validateToken,
    schemaValidation(UpdateDataSchema),
    dataController.updateData
  );

  return routes;
};
