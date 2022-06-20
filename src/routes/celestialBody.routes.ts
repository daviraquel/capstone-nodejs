import { Router } from "express";
import celestialBodyController from "../controllers/celestialBody.controller.ts/celestialBody.controller";
import { schemaValidation } from "../middlewares";
import { checkCelestialBodyExists } from "../middlewares/celestialBody";
import { createCelestialBodySchema } from "../schemas/celestialBody";

const routes = Router();

export const celestialBodyRoutes = () => {
  routes.post("/", schemaValidation(createCelestialBodySchema)),
    checkCelestialBodyExists;
  celestialBodyController.CreateCelestialBody;
  return routes;
};
