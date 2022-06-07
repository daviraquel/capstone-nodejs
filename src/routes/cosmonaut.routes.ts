import { Router } from "express";

import cosmonautCreateController from "../controllers/cosmonaut/cosmonautCreate.controller";
//importar demais controllers

//importar middlewares

const routes = Router();

export const cosmonautRoutes = () => {
  routes.post("/", cosmonautCreateController);
  //adicionar demais rotas

  return routes;
};
