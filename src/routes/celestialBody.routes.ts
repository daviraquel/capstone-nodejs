import { Router } from "express";
import celestialBodyController from "../controllers/celestialBody.controller.ts/celestialBody.controller";
import { CreatorMiddleware, schemaValidation } from "../middlewares";
import { checkCelestialBodyExists } from "../middlewares/celestialBody";
import { IdVerifyCelestialBody } from "../middlewares/celestialBody/idVerifyCelestialBody.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import {
  createCelestialBodySchema,
  updateCelestialBodySchema,
} from "../schemas/celestialBody";

const routes = Router();

export const celestialBodyRoutes = () => {
  routes.post(
    "/",
    validateToken,
    CreatorMiddleware,
    schemaValidation(createCelestialBodySchema),
    checkCelestialBodyExists,
    celestialBodyController.CreateCelestialBody
  );

  routes.get("/", celestialBodyController.GetCelestialBody);
  routes.get(
    "/:id",
    IdVerifyCelestialBody,
    celestialBodyController.GetCelestialBodyById
  );

  routes.patch(
    "/:id",
    validateToken,
    schemaValidation(updateCelestialBodySchema),
    IdVerifyCelestialBody,
    celestialBodyController.UpdateCelestialBody
  );

  routes.delete(
    "/:id",
    validateToken,
    IdVerifyCelestialBody,
    celestialBodyController.DeleteCelestialBody
  );

  return routes;
};
