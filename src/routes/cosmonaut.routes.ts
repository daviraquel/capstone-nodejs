import { Router } from "express";

import cosmonautController from "../controllers/cosmonaut/cosmonaut.controller";
import { schemaValidation } from "../middlewares";

import checkCosmonautExists from "../middlewares/cosmonaut/checkCosmonautExists.middleware";

import { createCosmonautSchema } from "../schemas/cosmonaut/createCosmonaut.schema";

//importar middlewares

const routes = Router();

export const cosmonautRoutes = () => {
  routes.post(
    "/",
    [schemaValidation(createCosmonautSchema), checkCosmonautExists],
    cosmonautController.createCosmonaut
  );
  routes.get("/", cosmonautController.getAllCosmonauts);
  routes.patch("/id", cosmonautController.updateCosmonaut);
  routes.delete("/id", cosmonautController.deleteCosmonaut);

  return routes;
};
