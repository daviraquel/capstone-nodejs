import { Express } from "express";
import { cosmonautRoutes } from "./cosmonaut.routes";
//importar outras rotas

export const appRoutes = (app: Express) => {
  app.use("/cosmonaut", cosmonautRoutes());
  // registrar outras rotas
};
