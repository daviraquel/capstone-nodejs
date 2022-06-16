import { Router } from "express";

import galaxyCreateController from "../controllers/galaxy/galaxyCreate.controller";

const routes = Router();

export const galaxyRoutes = () => {
  routes.post("/", galaxyCreateController);

  return routes;
};
