import { Express } from "express";
import { categoryRoutes } from "./category.routes";
import { cosmonautRoutes } from "./cosmonaut.routes";
//importar outras rotas

export const appRoutes = (app: Express) => {
  app.use("/cosmonaut", cosmonautRoutes());
  app.use("/category", categoryRoutes());

  // registrar outras rotas
};
