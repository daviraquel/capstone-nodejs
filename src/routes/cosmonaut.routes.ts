import { Router } from "express";

import cosmonautController from "../controllers/cosmonaut/cosmonaut.controller";
import { schemaValidation } from "../middlewares";
import {
  checkCosmonautExists,
  IdVerifyCosmonaut,
} from "../middlewares/cosmonaut";
import { validateToken } from "../middlewares/validateToken.middleware";

import {
  createCosmonautSchema,
  loginCosmonautSchema,
  updateCosmonautSchema,
} from "../schemas/cosmonaut";

const routes = Router();

export const cosmonautRoutes = () => {
  routes.post(
    "/",
    schemaValidation(createCosmonautSchema),
    checkCosmonautExists,
    cosmonautController.createCosmonaut
  );
  routes.post(
    "/login",
    schemaValidation(loginCosmonautSchema),
    cosmonautController.loginCosmonaut
  );

  routes.get("/", validateToken, cosmonautController.getAllCosmonauts);
  routes.get(
    "/profile",
    validateToken,
    IdVerifyCosmonaut,
    cosmonautController.getByIdCosmonaut
  );

  routes.patch(
    "/",
    schemaValidation(updateCosmonautSchema),
    validateToken,
    IdVerifyCosmonaut,
    cosmonautController.updateCosmonaut
  );

  routes.delete(
    "/",
    validateToken,
    IdVerifyCosmonaut,
    cosmonautController.deleteCosmonaut
  );

  return routes;
};
