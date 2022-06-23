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
    validateToken,
    schemaValidation(createDataSchema),
    checkDataExists,
    dataController.createData
  );

  routes.get("/", validateToken, dataController.getData);
  routes.get("/:id", validateToken, IdVerifyData, dataController.getByIdDate);

  routes.delete("/:id", validateToken, IdVerifyData, dataController.deleteData);

  routes.patch(
    "/:id",
    validateToken,
    schemaValidation(UpdateDataSchema),
    IdVerifyData,
    dataController.updateData
  );

  return routes;
};
