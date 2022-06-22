import { Router } from "express";
import GalaxyController from "../controllers/galaxy/galaxyCreate.controller";
import { CreatorMiddleware, schemaValidation } from "../middlewares";
import { checkGalaxyExists } from "../middlewares/galaxy/checkGalaxyId.middleware";
import { IdVerifyGalaxy } from "../middlewares/galaxy/idVerifyGalaxy.middleware";
import { validateToken } from "../middlewares/validateToken.middleware";
import { createGalaxySchema, UpdateGalaxySchema } from "../schemas/galaxy";

const routes = Router();

export const galaxyRoutes = () => {
  routes.post(
    "/",
    validateToken,
    CreatorMiddleware,
    schemaValidation(createGalaxySchema),
    checkGalaxyExists,
    GalaxyController.CreateGalaxy
  );
  routes.get("/", validateToken, GalaxyController.ListAllGalaxies);
  routes.get(
    "/:id",
    validateToken,
    IdVerifyGalaxy,
    GalaxyController.GetAGalaxy
  );
  routes.delete(
    "/:id",
    IdVerifyGalaxy,
    validateToken,
    GalaxyController.DeleteGalaxy
  );
  routes.patch(
    "/:id",
    IdVerifyGalaxy,
    validateToken,
    schemaValidation(UpdateGalaxySchema),
    GalaxyController.UpdateGalaxy
  );
  return routes;
};
