import { Router } from "express";
import celestialBodyController from "../controllers/celestialBody.controller.ts/celestialBody.controller";
import { schemaValidation } from "../middlewares";
import { checkCelestialBodyExists } from "../middlewares/celestialBody";
import { IdVerifyCelestialBody } from "../middlewares/celestialBody/idVerifyCelestialBody.middleware";
import {
  createCelestialBodySchema,
  updateCelestialBodySchema,
} from "../schemas/celestialBody";

const routes = Router();

export const celestialBodyRoutes = () => {
  routes.post("/", schemaValidation(createCelestialBodySchema)),
    checkCelestialBodyExists;
  celestialBodyController.CreateCelestialBody;

  routes.get("/", celestialBodyController.GetCelestialBody);

  routes.patch(
    "/:id",
    schemaValidation(updateCelestialBodySchema),
    IdVerifyCelestialBody,
    celestialBodyController.UpdateCelestialBody
  );

  routes.delete(
    "/:id",
    IdVerifyCelestialBody,
    celestialBodyController.DeleteCelestialBody
  );

  return routes;
};
