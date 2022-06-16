import { Router } from "express";

import cosmonautController from "../controllers/cosmonaut/cosmonaut.controller";

import schemaValidation from "../middlewares/schemaValidation.middleware";
import checkCosmonautExists from "../middlewares/checkCosmonautExists.middleware";

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
  //adicionar demais rotas

  return routes;
};
