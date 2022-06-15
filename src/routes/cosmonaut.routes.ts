import { Router } from "express";

import cosmonautController from "../controllers/cosmonaut/cosmonaut.controller";

//importar middlewares

const routes = Router();

export const cosmonautRoutes = () => {
  routes.post("/", cosmonautController.createCosmonaut);
  routes.get("/", cosmonautController.getAllCosmonauts);
  //adicionar demais rotas

  return routes;
};
