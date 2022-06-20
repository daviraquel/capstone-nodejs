import { Express } from "express";
import { categoryRoutes } from "./category.routes";
import { celestialBodyRoutes } from "./celestialBody.routes";
import { cosmonautRoutes } from "./cosmonaut.routes";
import { dataRoutes } from "./data.routes";
//importar outras rotas

export const appRoutes = (app: Express) => {
  app.use("/cosmonaut", cosmonautRoutes());
  app.use("/category", categoryRoutes());
  app.use("/data", dataRoutes());
  app.use("/celestial_body", celestialBodyRoutes());

  // registrar outras rotas
};
