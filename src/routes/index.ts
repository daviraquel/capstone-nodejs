import { Express } from "express";
import { cosmonautRoutes } from "./cosmonaut.routes";
import { galaxyRoutes } from "./galaxy.routes";
//importar outras rotas

export const appRoutes = (app: Express) => {
  app.use("/cosmonaut", cosmonautRoutes());
  app.use("/galaxy", galaxyRoutes());
  // registrar outras rotas
};
