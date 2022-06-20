import { Router } from "express";
import GalaxyController from "../controllers/galaxy/galaxyCreate.controller";
import { schemaValidation } from "../middlewares";
import { createGalaxySchema } from "../schemas/galaxy";

const routes = Router();

export const galaxyRoutes = () => {
  routes.post(
    "/",
    schemaValidation(createGalaxySchema),
    GalaxyController.CreateGalaxy
  );
  routes.get("/");
  routes.delete("/");
  routes.patch("/");
  return routes;
};
